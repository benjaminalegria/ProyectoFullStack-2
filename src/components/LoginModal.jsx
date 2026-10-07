export default function LoginModal() {
    const handleLogin = (e) => {
        e.preventDefault();
        alert("¡Inicio de sesión simulado!");
    };

    return (
        <div className="modal fade" id="modalLogin" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Iniciar sesión</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="loginCorreo" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" id="loginCorreo" placeholder="ejemplo@gmail.com" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Entre 4 y 10 caracteres" minLength="4" maxLength="10" required />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}