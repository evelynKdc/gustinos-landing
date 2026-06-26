/**
 * CONFIGURACIÓN CENTRALIZADA — GUSTIÑOS
 */

export const config = {
  // ── Identidad ───────────────────────────────────────────────
  nombre:      "Gustiños",
  tagline:     "REPOSTERÍA CASERA",
  eslogan:     "Sabor de casa, en cada bocado.",
  descripcion: "Tortas y bocaditos caseros para tu día a día, tus eventos y tu empresa.",

  // ── Contacto ────────────────────────────────────────────────
  whatsapp: "51993823242",
  correo:   "hola@gustinos.pe",
  horario:  "Lun – Sáb, 9 am – 7 pm",
  zona:     "Lima",

  // ── Redes ───────────────────────────────────────────────────
  redes: {
    instagram: "https://www.instagram.com/gustinos.pe",
    facebook:  "https://www.facebook.com/gustinos.pe",
    tiktok:    "https://www.tiktok.com/@gustinos.pe",
    whatsapp:  "https://wa.me/51993823242",
  },

  // ── Métricas ────────────────────────────────────────────────
  metricas: [
    { valor: "+500", etiqueta: "Tortas entregadas" },
    { valor: "+5",   etiqueta: "Años horneando" },
    { valor: "100%", etiqueta: "Ingredientes naturales" },
  ],

  // ── Nosotros ────────────────────────────────────────────────
  nosotros: {
    historia:
      "Gustiños nació en una cocina de casa, entre recetas de familia y las ganas de endulzar los momentos importantes de la gente. Hoy seguimos horneando todo igual: con ingredientes reales y sin apuro, ya sea para un pedido de una sola torta o para 300 bocaditos de una boda.",
  },

  // ── Pasos para pedir ────────────────────────────────────────
  pasos: [
    { numero: "01", titulo: "Elige tu producto",    descripcion: "Cuéntanos qué necesitas o revisa nuestro menú." },
    { numero: "02", titulo: "Coordinamos contigo",  descripcion: "Definimos fecha, cantidad y todos los detalles." },
    { numero: "03", titulo: "Recibes tu pedido",    descripcion: "Fresco, a tiempo y listo para disfrutar." },
  ],

  // ── Cobertura ───────────────────────────────────────────────
  cobertura: {
    zona: "Lima y Callao",
    distritos: [
      "Callao", "San Miguel", "Ventanilla",
      "Pueblo Libre", "Cercado de Lima",
      "Breña", "San Martín de Porres",
    ],
    nota: "El costo de envío varía según tu ubicación y se cotiza al confirmar el pedido.",
  },
};
