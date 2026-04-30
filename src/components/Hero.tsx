import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/img/fundo.png" // Atualizado para a sua nova imagem 16:9
          alt="Tacacá da Maroca - O autêntico sabor da Amazônia"
          className="w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 font-oswald uppercase tracking-tight">
          Sabores que a{' '}
          <span className="text-amber-400 relative">
            Amazônia
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400/50 rounded" />
          </span>{' '}
          guardou
        </h1>

        <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Tacacá fumegante, piracuí artesanal e camarão fresquinho —
          a culinária paraense e amazonense do jeito que a vovó fazia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30"
          >
            Ver Cardápio
          </a>
          <a
            href="#featured"
            className="border border-stone-400 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
          >
            Pratos em Destaque
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}