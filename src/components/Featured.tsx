import { Star } from 'lucide-react';
import { menuData, MenuItem } from '../data/menu'; // Importa do novo arquivo
import MenuCard from './MenuCard';

// Remova o import do CartItem se ele estiver no arquivo do supabase, 
// você pode definir a interface aqui ou em um arquivo de tipos separado.
interface CartItem extends MenuItem {
  quantity: number;
}

interface FeaturedProps {
  cartItems: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

export default function Featured({ cartItems, onAdd, onRemove }: FeaturedProps) {
  // Filtra direto do arquivo local
  const featured = menuData.filter(item => item.featured && item.available);

  if (featured.length === 0) return null;

  return (
    <section id="featured" className="bg-stone-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <Star className="w-4 h-4 fill-amber-400" />
            Destaques da Casa
            <Star className="w-4 h-4 fill-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-oswald text-[#d69147]">
            Os favoritos do público
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Pratos que conquistaram o coração dos nossos clientes — preparados com amor e tradição.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </section>
  );
}