/**
 * CATÁLOGO — GUSTIÑOS
 */

export const tabs = [
  { id: "tortas",    label: "Tortas" },
  { id: "bocaditos", label: "Bocaditos" },
  { id: "eventos",   label: "Eventos y Catering" },
];

export const productos = [
  // ── TORTAS ──────────────────────────────────────────────────
  {
    id: 1,
    tab: "tortas",
    nombre: "Chocolate Húmedo",
    descripcion: "Bizcocho de cacao intenso con ganache artesanal.",
    precio: "Desde S/ 45",
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    popular: true,
    accion: "pedir",
  },
  {
    id: 2,
    tab: "tortas",
    nombre: "Red Velvet",
    descripcion: "Suave y aterciopelado, con frosting de queso crema.",
    precio: "Desde S/ 50",
    imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    popular: false,
    accion: "pedir",
  },
  {
    id: 3,
    tab: "tortas",
    nombre: "Torta Personalizada",
    descripcion: "Diseñamos la torta de tus sueños para esa fecha especial.",
    precio: "Desde S/ 60",
    imagen: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
    popular: true,
    accion: "consultar",
  },

  // ── BOCADITOS ───────────────────────────────────────────────
  {
    id: 4,
    tab: "bocaditos",
    nombre: "Mini Alfajores",
    descripcion: "Rellenos de manjar, horneados al momento.",
    precio: "S/ 1.50 c/u",
    imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    popular: true,
    accion: "pedir",
  },
  {
    id: 5,
    tab: "bocaditos",
    nombre: "Empanaditas Dulces",
    descripcion: "Caja x 12 unidades, relleno de manjar o guayaba.",
    precio: "S/ 18 la caja",
    imagen: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80",
    popular: false,
    accion: "pedir",
  },
  {
    id: 6,
    tab: "bocaditos",
    nombre: "Brownies",
    descripcion: "Con trozos de chocolate, fudgy y sin rellenos artificiales.",
    precio: "S/ 4 c/u",
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    popular: false,
    accion: "pedir",
  },

  // ── EVENTOS Y CATERING ──────────────────────────────────────
  {
    id: 7,
    tab: "eventos",
    nombre: "Pack Boda / Cumpleaños",
    descripcion: "Mesa de bocaditos + torta principal. Cotización según número de invitados.",
    precio: "Cotización",
    imagen: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    popular: true,
    accion: "consultar",
  },
  {
    id: 8,
    tab: "eventos",
    nombre: "Catering Corporativo",
    descripcion: "Cajas individuales para oficinas y eventos de empresa. Cotización por volumen.",
    precio: "Cotización",
    imagen: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    popular: false,
    accion: "consultar",
  },
];
