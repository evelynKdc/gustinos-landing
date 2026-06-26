/**
 * UTILIDADES — GUSTIÑOS
 * Funciones helper reutilizables en toda la app.
 */

/** Renderiza n estrellas como string unicode */
export const renderEstrellas = (n) =>
  "★".repeat(Math.min(n, 5)) + "☆".repeat(Math.max(0, 5 - n));

/** Capitaliza primera letra */
export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/** Filtra productos por categoría */
export const filtrarPorCategoria = (productos, categoriaId) =>
  categoriaId === "todos"
    ? productos
    : productos.filter((p) => p.categoria === categoriaId);
