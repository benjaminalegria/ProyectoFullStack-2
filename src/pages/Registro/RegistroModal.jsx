export default function RegistroModal() {
    return (
        <div className="modal fade" id="modalRegistro" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Crear una cuenta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" placeholder="Ingrese su nombre" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" placeholder="ejemplo@correo.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input type="password" className="form-control" placeholder="Entre 4 y 10 caracteres" required />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success">Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}