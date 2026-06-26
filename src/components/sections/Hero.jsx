import { config } from "../../data/configuracion";
import Button from "../ui/Button";
import { useWhatsApp } from "../../hooks/useWhatsApp";

const HERO_IMG = "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&q=90";

export default function Hero() {
  const { consultarEvento } = useWhatsApp();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Foto de fondo */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Tortas artesanales Gustiños"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-carbon/60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon/80 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-32">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-raspberry-light text-xs font-bold tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in animate-delay-100">
            {config.tagline}
          </p>

          {/* Headline en blanco */}
          <h1 className="font-display font-extrabold text-display-xl text-white leading-[1.05] mb-6 opacity-0 animate-fade-up animate-delay-200">
            Sabor de casa,{" "}
            <span className="text-raspberry-light">en cada bocado</span>
          </h1>

          {/* Descripción */}
          <p className="text-white/70 text-lg font-light leading-relaxed mb-10 opacity-0 animate-fade-up animate-delay-300">
            {config.descripcion}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up animate-delay-400">
            <Button href="#menu" variant="primary" size="lg">
              Ver menú
            </Button>
            <Button
              href={consultarEvento()}
              external
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-carbon rounded-full text-sm font-bold tracking-wider uppercase px-8 py-3.5 transition-all duration-200"
            >
              Cotizar mi evento
            </Button>
          </div>

          {/* Métricas */}
          <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-white/20 opacity-0 animate-fade-up animate-delay-500">
            {config.metricas.map((m) => (
              <div key={m.etiqueta}>
                <p className="font-display font-extrabold text-2xl text-white">{m.valor}</p>
                <p className="text-white/50 text-xs mt-0.5 font-light">{m.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#menu"
        aria-label="Ver menú"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white transition-colors opacity-0 animate-fade-in animate-delay-500"
      >
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}