import { useState, useCallback } from 'react';
import { CartItem, MenuItem } from './lib/supabase';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (!existing) return prev;
      if (existing.quantity === 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c));
    });
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  return (
    <div className="min-h-screen bg-stone-900">
      <Header cartItems={cartItems} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Featured cartItems={cartItems} onAdd={addToCart} onRemove={removeFromCart} />
      <MenuSection cartItems={cartItems} onAdd={addToCart} onRemove={removeFromCart} />
      <About />
      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  );
}
