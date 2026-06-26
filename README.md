# Gustiños — Repostería Casera

Landing page para Gustiños, repostería artesanal en Lima, Perú.

## Tech stack

- React + Vite
- Tailwind CSS v3
- lucide-react

## Estructura

```
src/
├── data/         # Configuración centralizada del negocio
├── hooks/        # useWhatsApp, useScrollReveal
├── utils/        # Helpers reutilizables
└── components/
    ├── ui/       # Button, SectionHeader, Badge, Logo
    └── sections/ # Navbar, Hero, Nosotros, Catalogo, Testimonios, Contacto, Footer
```

## Instalación

```bash
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
npm run dev
```

## Personalización

Todos los datos del negocio (nombre, WhatsApp, productos, distritos, etc.)
se editan desde `src/data/configuracion.js` sin tocar los componentes.
