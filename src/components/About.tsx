import { MapPin, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
                alt="Nossa cozinha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 hidden lg:flex bg-amber-500 text-stone-900 rounded-2xl p-5 shadow-2xl flex-col items-center">
              <span className="text-4xl font-black leading-none">15+</span>
              <span className="text-sm font-semibold mt-1">anos de tradição</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Da floresta<br />para a sua mesa
            </h2>
            <p className="text-stone-400 leading-relaxed mb-4">
              Fundada por uma família de Belém do Pará, nossa missão é trazer a autenticidade da culinária amazônica
              para cada prato servido. Usamos ingredientes frescos e seguimos receitas passadas de geração em geração.
            </p>
            <p className="text-stone-400 leading-relaxed mb-8">
              Do tucupi extraído da mandioca brava ao jambu colhido semanalmente, cada ingrediente conta a história
              de um povo rico em cultura e sabor.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Receitas Originais</div>
                  <div className="text-stone-500 text-sm">Direto de Belém</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Ingredientes Frescos</div>
                  <div className="text-stone-500 text-sm">Da região amazônica</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Aberto diariamente</div>
                  <div className="text-stone-500 text-sm">11h às 22h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
