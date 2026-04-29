import { MapPin, Clock, Phone, Leaf, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-stone-900" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">Sabores</span>
                <span className="text-amber-400 text-xs font-medium tracking-widest uppercase leading-none">da Amazônia</span>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-sm mb-6">
              Autenticidade e tradição em cada garfada. Culinária paraense e amazonense
              servida com o carinho de uma família do Norte do Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-amber-500 text-stone-400 hover:text-stone-900 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-amber-500 text-stone-400 hover:text-stone-900 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-sm">
              {[
                { day: 'Seg — Sex', hours: '11h às 22h' },
                { day: 'Sábado', hours: '10h às 23h' },
                { day: 'Domingo', hours: '10h às 21h' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-stone-400">
                    <span className="text-stone-300">{day}</span> — {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  Av. Nazaré, 123<br />
                  Belém — PA, 66035-170
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+5591999999999"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  (91) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-stone-600 text-sm">
            &copy; {new Date().getFullYear()} Sabores da Amazônia. Todos os direitos reservados.
          </p>
          <p className="text-stone-700 text-xs">Feito com amor e tucupi</p>
        </div>
      </div>
    </footer>
  );
}
