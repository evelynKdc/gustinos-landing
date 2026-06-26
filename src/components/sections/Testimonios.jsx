import { testimonios } from "../../data/testimonios";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeader from "../ui/SectionHeader";

function TestimonioCard({ t, delay }) {
  const ref = useScrollReveal();
  return (
    <blockquote
      ref={ref}
      className={`will-animate animate-delay-${delay} bg-white border border-blush rounded-2xl p-7 flex flex-col gap-5 hover:border-raspberry/30 transition-colors`}
    >
      {/* Comillas decorativas */}
      <span className="text-raspberry/20 font-display font-extrabold text-6xl leading-none -mb-4">"</span>

      <p className="text-carbon font-light leading-relaxed text-base italic flex-1">
        {t.texto}
      </p>

      <footer className="border-t border-blush pt-4 flex items-center justify-between">
        <div>
          <cite className="not-italic font-bold text-carbon text-sm font-display">{t.autor}</cite>
        </div>
        <span className="text-xs text-gray bg-blush px-3 py-1 rounded-full font-medium">
          {t.contexto}
        </span>
      </footer>
    </blockquote>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Lo que dicen nuestros clientes"
          title="Más de 500 pedidos nos respaldan"
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <TestimonioCard key={t.id} t={t} delay={(i + 1) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
