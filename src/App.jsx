import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
// Importa los componentes que creaste en el paso anterior y el de esta vez
import Nosotros from './components/Nosotros';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carritoHuerto");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al cargar productos", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("carritoHuerto", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (codigo) => {
    const item = productos.find(p => p.codigo === codigo);
    if (!item) return;

    setCarrito(prevCarrito => {
      const existe = prevCarrito.find(p => p.codigo === codigo);
      if (existe) {
        return prevCarrito.map(p => 
          p.codigo === codigo ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prevCarrito, { 
        codigo: item.codigo, 
        nombre: item.nombre, 
        precio: item.precio, 
        unidad: item.unidad, 
        cantidad: 1 
      }];
    });
  };

  // NUEVAS FUNCIONES PARA EL CARRITO
  const cambiarCantidad = (codigo, delta) => {
    setCarrito(prevCarrito => {
      return prevCarrito.map(p => {
        if (p.codigo === codigo) {
          const nuevaCantidad = p.cantidad + delta;
          return { ...p, cantidad: nuevaCantidad };
        }
        return p;
      }).filter(p => p.cantidad > 0); // Si llega a 0, se elimina automáticamente
    });
  };

  const eliminarDelCarrito = (codigo) => {
    setCarrito(prevCarrito => prevCarrito.filter(p => p.codigo !== codigo));
  };

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <Header cartCount={totalUnidades} />
      
      <div className="container mt-4" id="inicio">
        <div className="p-4 p-md-5 bg-light rounded-3 text-center shadow-sm">
            <div className="mb-4">
                <img src="/Huerto hogar IMG.png" className="img-fluid rounded shadow-sm border" style={{maxWidth: '520px', width: '100%', height: 'auto'}} alt="HuertoHogar" />
            </div>
            <h1 className="h3 fw-bold mb-3">🌿 ¡Descubre la frescura del campo con HuertoHogar! 🚜</h1>
            <p className="fst-italic text-secondary mb-1">Conéctate con la naturaleza y lleva lo mejor del campo a tu mesa.</p>
            <div>
                <a href="#productos" className="btn btn-success btn-lg px-4 shadow-sm">Ver Catálogo</a>
            </div>
        </div>
      </div>

      <main>
        <ProductList productos={productos} onAdd={agregarAlCarrito} />
        <Nosotros />
        <Blog />
        <Contacto />
      </main>

      {/* RENDERIZAR LOS MODALES AL FINAL */}
      <CartModal 
        carrito={carrito} 
        cambiarCantidad={cambiarCantidad} 
        eliminarDelCarrito={eliminarDelCarrito} 
      />
      <LoginModal />

      <footer className="bg-dark text-white text-center py-3 mt-5">
          <p className="mb-0">&copy; 2026 HuertoHogar. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App;