export default function CartModal({ carrito, cambiarCantidad, eliminarDelCarrito }) {
    const totalPagar = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <div className="modal fade" id="modalCarrito" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Carrito de compras</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {carrito.length === 0 ? (
                            <p className="text-muted text-center my-3">El carrito está vacío.</p>
                        ) : (
                            <div className="list-group list-group-flush">
                                {carrito.map(item => (
                                    <div key={item.codigo} className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <div>
                                            <h6 className="mb-0 fw-bold">{item.nombre}</h6>
                                            <small className="text-muted">${item.precio.toLocaleString("es-CL")} c/u</small>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="btn btn-sm btn-outline-secondary px-2 py-0" onClick={() => cambiarCantidad(item.codigo, -1)}>-</button>
                                            <span className="fw-bold">{item.cantidad}</span>
                                            <button className="btn btn-sm btn-outline-secondary px-2 py-0" onClick={() => cambiarCantidad(item.codigo, 1)}>+</button>
                                            <span className="ms-2 fw-bold text-success">${(item.precio * item.cantidad).toLocaleString("es-CL")}</span>
                                            <button className="btn btn-sm text-danger ms-1" onClick={() => eliminarDelCarrito(item.codigo)}>&times;</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <hr />
                        <div className="d-flex justify-content-between fw-bold">
                            <span>Total:</span>
                            <span>${totalPagar.toLocaleString("es-CL")}</span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-success" disabled={carrito.length === 0}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}