export default function ProductCard({ producto, onAdd }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
        <div className="card h-100 shadow-sm border-0">
            <img src={producto.imagen} className="card-img-top" style={{height: '190px', objectFit: 'cover'}} alt={producto.nombre} />
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="badge bg-secondary">Stock: {producto.stock} {producto.unidad}s</span>
                </div>
                <h5 className="card-title fw-bold">{producto.nombre}</h5>
                <p className="card-text text-muted small flex-grow-1">{producto.descripcion}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-5 fw-bold text-success">${producto.precio} <small className="text-muted fs-6 fw-normal">/ {producto.unidad}</small></span>
                </div>
                <button className="btn btn-success mt-3 w-100" onClick={() => onAdd(producto.codigo)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    </div>
  );
}