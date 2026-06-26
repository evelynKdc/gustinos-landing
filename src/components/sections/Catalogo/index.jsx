import { useState } from "react";
import { tabs, productos } from "../../../data/productos";
import SectionHeader from "../../ui/SectionHeader";
import ProductoCard from "./ProductoCard";

export default function Catalogo() {
  const [tabActivo, setTabActivo] = useState(tabs[0].id);
  const filtrados = productos.filter((p) => p.tab === tabActivo);

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <SectionHeader
          eyebrow="Lo que preparamos para ti"
          title="Nuestro menú"
          subtitle="Desde una torta para el cumple hasta el catering de tu empresa. Todo hecho con ingredientes reales."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-blush rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabActivo(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  tabActivo === tab.id
                    ? "bg-raspberry text-white shadow-sm"
                    : "text-gray hover:text-carbon"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
