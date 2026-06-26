import Navbar      from "./components/sections/Navbar";
import Hero        from "./components/sections/Hero";
import Catalogo    from "./components/sections/Catalogo/index";
import Nosotros    from "./components/sections/Nosotros";
import Testimonios from "./components/sections/Testimonios";
import Contacto    from "./components/sections/Contacto";
import Footer      from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalogo />
        <Nosotros />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
