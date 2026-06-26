import { config } from "../../data/configuracion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const NOSOTROS_IMG = "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80";

function Metrica({ valor, etiqueta, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`will-animate animate-delay-${delay} text-center sm:text-left`}>
      <p className="font-display font-extrabold text-4xl text-raspberry">{valor}</p>
      <p className="text-gray text-sm font-light mt-1">{etiqueta}</p>
    </div>
  );
}

export default function Nosotros() {
  const imgRef = useScrollReveal("animate-fade-in");

  return (
    <section id="nosotros" className="py-24 bg-blush/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div ref={imgRef} className="will-animate relative order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={NOSOTROS_IMG}
                alt="Nuestra historia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Card flotante */}
            <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-raspberry text-white px-5 py-4 rounded-xl shadow-lg">
              <p className="font-display font-bold text-sm">Hecho en casa,</p>
              <p className="font-display font-bold text-sm">entregado con amor</p>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <SectionHeader
              eyebrow="Nuestra historia"
              title="Más que repostería, son momentos"
              align="left"
            />
            <p className="text-gray font-light leading-relaxed text-base mb-10">
              {config.nosotros.historia}
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blush-dark">
              {config.metricas.map((m, i) => (
                <Metrica
                  key={m.etiqueta}
                  valor={m.valor}
                  etiqueta={m.etiqueta}
                  delay={(i + 1) * 100}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
