import { Plus } from 'lucide-react';
import { MenuItem, CartItem } from '../lib/supabase';

interface MenuCardProps {
  item: MenuItem;
  cartItems: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

const tagColors: Record<string, string> = {
  popular: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  premium: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  tradicional: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  vegetariano: 'bg-green-500/20 text-green-300 border-green-500/30',
  petisco: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  especial: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  regional: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  natural: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  acompanhamento: 'bg-stone-500/20 text-stone-300 border-stone-500/30',
};

export default function MenuCard({ item, cartItems, onAdd, onRemove }: MenuCardProps) {
  const cartItem = cartItems.find((c) => c.id === item.id);
  const qty = cartItem?.quantity ?? 0;

  return (
    <div className="group bg-stone-800 border border-stone-700 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        {item.featured && (
          <div className="absolute top-3 left-3 bg-amber-500 text-stone-900 text-xs font-bold px-2.5 py-1 rounded-full">
            Destaque
          </div>
        )}
        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-0.5 rounded-full border backdrop-blur-sm ${tagColors[tag] ?? 'bg-stone-500/20 text-stone-300 border-stone-500/30'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-base leading-tight mb-1">{item.name}</h3>
        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-bold text-lg">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>

          {qty === 0 ? (
            <button
              onClick={() => onAdd(item)}
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onRemove(item.id)}
                className="w-8 h-8 rounded-full border border-stone-600 hover:border-red-400 text-stone-300 hover:text-red-400 transition-colors flex items-center justify-center font-bold text-lg leading-none"
              >
                −
              </button>
              <span className="text-white font-bold w-4 text-center">{qty}</span>
              <button
                onClick={() => onAdd(item)}
                className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 transition-colors flex items-center justify-center font-bold text-lg leading-none"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
