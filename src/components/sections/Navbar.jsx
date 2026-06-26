import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { config } from "../../data/configuracion";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useWhatsApp } from "../../hooks/useWhatsApp";

const NAV_LINKS = [
  { href: "#menu",        label: "Menú" },
  { href: "#nosotros",    label: "Nosotros" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#contacto",    label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { consultarEvento }   = useWhatsApp();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">

        {/* Logo — blanco al inicio, carbón al hacer scroll */}
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Gustiños inicio">
          <Logo size={56} />
          <span
            className={`font-display font-extrabold text-lg hidden sm:block transition-colors duration-300 ${
              scrolled ? "text-carbon" : "text-white"
            }`}
          >
            Gusti<span className="text-raspberry">ñ</span>os
          </span>
        </a>

        {/* Desktop links — blancos al inicio, grises al hacer scroll */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-gray hover:text-carbon"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-raspberry group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — outline blanco al inicio, sólido frambuesa al hacer scroll */}
        <Button
          href={consultarEvento()}
          external
          size="md"
          className={`hidden md:inline-flex transition-all duration-300 ${
            scrolled
              ? ""
              : "!bg-transparent !border-1 !border-white !text-white hover:!bg-white hover:!text-carbon"
          }`}
        >
          Cotizar evento
        </Button>

        {/* Hamburguesa — blanco al inicio, carbón al scroll */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-carbon" : "text-white"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu — siempre blanco */}
      {open && (
        <div className="md:hidden bg-white border-t border-blush px-5 pb-5 shadow-md">
          <ul className="flex flex-col pt-2 divide-y divide-blush">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-carbon font-medium text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={consultarEvento()} external size="md" className="mt-4 w-full">
            Cotizar evento
          </Button>
        </div>
      )}
    </header>
  );
}