import { useState } from 'react';
import { Soup, Fish, Waves, UtensilsCrossed, GlassWater, Search } from 'lucide-react';
import { MenuItem, CartItem, menuData } from '../data/menu';
import MenuCard from './MenuCard';

const categoryIcons: Record<string, React.ElementType> = {
  'Tacacá': Soup,
  'Piracuí': Fish,
  'Camarão': Waves,
  'Pratos Típicos': UtensilsCrossed,
  'Bebidas': GlassWater,
};

interface MenuSectionProps {
  cartItems: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

export default function MenuSection({ cartItems, onAdd, onRemove }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  // 1. Extraímos as categorias únicas existentes nos seus dados locais
  const categories = Array.from(new Set(menuData.map(item => item.category)));

  // 2. Filtramos os itens baseados na categoria ativa e na busca
  const filtered = menuData.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch =
      search.trim() === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch && item.available;
  });

  return (
    <section id="menu" className="bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Cardápio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-oswald text-[#d69147]">
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
          {categories.map((catName) => {
            const Icon = categoryIcons[catName] ?? UtensilsCrossed;
            return (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === catName
                    ? 'bg-amber-500 text-stone-900'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {catName}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
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