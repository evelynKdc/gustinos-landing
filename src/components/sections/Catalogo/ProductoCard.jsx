import { useWhatsApp } from "../../../hooks/useWhatsApp";
import Button from "../../ui/Button";

export default function ProductoCard({ producto }) {
  const { pedidoProducto, consultarEvento } = useWhatsApp();

  const href =
    producto.accion === "consultar"
      ? consultarEvento()
      : pedidoProducto(producto.nombre, producto.precio);

  const btnLabel = producto.accion === "consultar" ? "Consultar" : "Agregar a pedido";

  return (
    <article className="group bg-white border border-blush hover:border-raspberry/30 transition-all duration-300 hover:shadow-md flex flex-col rounded-xl overflow-hidden">
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-blush/30">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {producto.popular && (
          <span className="absolute top-3 left-3 bg-raspberry text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
            Popular
          </span>
        )}
        {producto.accion === "consultar" && (
          <span className="absolute top-3 right-3 bg-white/90 text-carbon text-xs font-semibold px-3 py-1 rounded-full">
            A medida
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-base text-carbon mb-1">
          {producto.nombre}
        </h3>
        <p className="text-gray text-sm font-light leading-relaxed mb-4 flex-1">
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-blush mt-auto">
          <span className="font-display font-extrabold text-lg text-carbon">
            {producto.precio}
          </span>
          <Button href={href} external size="sm" variant={producto.accion === "consultar" ? "outline" : "primary"}>
            {btnLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
