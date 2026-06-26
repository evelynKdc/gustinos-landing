import { config } from "../../data/configuracion";
import Logo from "../ui/Logo";

const NAV = [
  { href: "#menu",        label: "Menú" },
  { href: "#nosotros",    label: "Nosotros" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#contacto",    label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-white/60 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Marca */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/5 rounded-xl p-1.5">
                <Logo size={40} />
              </div>
              <div>
                <p className="font-display font-extrabold text-white text-lg leading-tight">
                  Gusti<span className="text-raspberry">ñ</span>os
                </p>
                <p className="text-white/30 text-xs tracking-widest">{config.tagline}</p>
              </div>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              {config.nosotros.historia.substring(0, 111)}…
            </p>
            {/* Redes */}
            <div className="flex gap-4 mt-5">
              {[
                { href: config.redes.instagram, label: "Instagram" },
                { href: config.redes.facebook,  label: "Facebook" },
                { href: config.redes.tiktok,    label: "TikTok" },
              ].map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-raspberry text-xs font-medium transition-colors"
                >
                  {r.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white/25 text-xs font-bold uppercase tracking-widest mb-4">Menú</h4>
            <ul className="space-y-2.5">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white/25 text-xs font-bold uppercase tracking-widest mb-4">Contacto</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/50">{config.horario}</li>
              <li className="text-sm text-white/50">{config.cobertura.zona}</li>
              <li>
                <a
                  href={`mailto:${config.correo}`}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {config.correo}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-8 font-light">
          © {year} {config.nombre}. Hecho con cariño en Lima.
        </p>
      </div>
    </footer>
  );
}
