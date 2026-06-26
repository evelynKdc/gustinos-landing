import { config } from "../data/configuracion";

export function useWhatsApp() {
  const base = `https://wa.me/${config.whatsapp}`;

  const buildLink = (msg = "") =>
    msg ? `${base}?text=${encodeURIComponent(msg)}` : base;

  const pedidoProducto = (nombre, precio) =>
    buildLink(`Hola ${config.nombre}! Quiero pedir: *${nombre}* (${precio}). ¿Me das más info?`);

  const consultarEvento = () =>
    buildLink(`Hola ${config.nombre}! Me interesa cotizar un evento o catering. ¿Podemos coordinar?`);

  const pedidoGeneral = () =>
    buildLink(`Hola ${config.nombre}! Quisiera hacer un pedido. ¿Pueden ayudarme?`);

  return { buildLink, pedidoProducto, consultarEvento, pedidoGeneral };
}
