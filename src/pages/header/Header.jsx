export default function Header({ cartCount }) {
  return (
    <header className="header">
        <div className="logo">
            <img src="/Logo IMG.png" className="img-fluid" alt="HuertoHogar" />
        </div>
        <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#productos">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
            <button type="button" className="btn btn-secondary text-white btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#modalLogin">
                Iniciar sesión
            </button>
            <button type="button" className="btn btn-secondary text-white btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#modalRegistro">
                Registrarse
            </button>
            <button type="button" className="btn btn-secondary text-white btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#modalCarrito">
                Carrito ({cartCount})
            </button>
            <button type="button" className="btn btn-secondary text-white btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#modalAdmin">
                Administrador
            </button>
        </nav>
    </header>
  );
}