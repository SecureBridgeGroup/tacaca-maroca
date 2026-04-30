import { X, ShoppingBag, Trash2, Plus, Minus, Phone } from 'lucide-react';
import { MenuItem, CartItem } from '../data/menu';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function Cart({ isOpen, onClose, cartItems, onAdd, onRemove, onClear }: CartProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 8.0 : 0;
  const total = subtotal + deliveryFee;

  const buildWhatsAppMessage = () => {
    const lines = cartItems.map(
      (item) =>
        `• ${item.quantity}x ${item.name} — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
    );
    lines.push('');
    lines.push(`Taxa de entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}`);
    lines.push(`*Total: R$ ${total.toFixed(2).replace('.', ',')}*`);
    const message = `Olá! Gostaria de fazer um pedido:\n\n${lines.join('\n')}`;
    return encodeURIComponent(message);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5592995242735?text=${buildWhatsAppMessage()}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-stone-900 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-700">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h2 className="text-white font-bold text-lg">Seu Pedido</h2>
            {cartItems.length > 0 && (
              <span className="bg-amber-500 text-stone-900 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-stone-600" />
              </div>
              <div>
                <p className="text-stone-400 font-medium">Seu pedido está vazio</p>
                <p className="text-stone-600 text-sm mt-1">Adicione itens do cardápio</p>
              </div>
              <button
                onClick={onClose}
                className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                Ver cardápio →
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-stone-800 rounded-xl p-4 border border-stone-700"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm leading-tight line-clamp-1">{item.name}</p>
                    <p className="text-amber-400 font-bold text-sm mt-0.5">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onRemove(item.id)}
                        className="w-7 h-7 rounded-full border border-stone-600 hover:border-red-400 text-stone-300 hover:text-red-400 transition-colors flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white font-bold text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onAdd(item)}
                        className="w-7 h-7 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 transition-colors flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={onClear}
                className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm transition-colors mt-2"
              >
                <Trash2 className="w-4 h-4" />
                Limpar pedido
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-stone-700 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-stone-400">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Taxa de entrega</span>
                <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-stone-700">
                <span>Total</span>
                <span className="text-amber-400">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Pedir via WhatsApp
            </button>
            <p className="text-center text-stone-600 text-xs">
              Você será redirecionado ao WhatsApp para confirmar o pedido
            </p>
          </div>
        )}
      </div>
    </>
  );
}
