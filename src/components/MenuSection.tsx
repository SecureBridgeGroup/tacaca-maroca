import { useState, useEffect } from 'react';
import { Soup, Fish, Waves, UtensilsCrossed, GlassWater, Search } from 'lucide-react';
import { supabase, Category, MenuItem, CartItem } from '../lib/supabase';
import MenuCard from './MenuCard';

const categoryIcons: Record<string, React.ElementType> = {
  bowl: Soup,
  fish: Fish,
  shrimp: Waves,
  plate: UtensilsCrossed,
  glass: GlassWater,
};

interface MenuSectionProps {
  cartItems: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

export default function MenuSection({ cartItems, onAdd, onRemove }: MenuSectionProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [catResult, itemResult] = await Promise.all([
        supabase.from('categories').select('*').order('order'),
        supabase.from('menu_items').select('*').eq('available', true),
      ]);
      if (catResult.data) setCategories(catResult.data);
      if (itemResult.data) setItems(itemResult.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filtered = items.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.category_id === activeCategory;
    const matchSearch =
      search.trim() === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="menu" className="bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Cardápio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Escolha o seu prato
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Receitas tradicionais preparadas com ingredientes frescos direto da Amazônia.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Buscar prato..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-stone-800 border border-stone-700 focus:border-amber-500 text-white placeholder-stone-500 rounded-full pl-10 pr-4 py-3 text-sm outline-none transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-stone-900'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.icon] ?? UtensilsCrossed;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-stone-900'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-stone-800 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-stone-700" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-stone-700 rounded w-3/4" />
                  <div className="h-3 bg-stone-700 rounded w-full" />
                  <div className="h-3 bg-stone-700 rounded w-5/6" />
                  <div className="flex justify-between items-center pt-1">
                    <div className="h-5 bg-stone-700 rounded w-16" />
                    <div className="h-8 bg-stone-700 rounded-full w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">Nenhum prato encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
