import { useState } from 'react';
import App_alert from './Alert';

export default function AdminModal() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    
    // Estados para la alerta visual
    const [showAlert, setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState('');
    const [disenoAlert, setDisenoAlert] = useState('danger');
    
    // Estado para saber si el admin ya entró
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Validación de campos vacíos
        if (correo.trim() === '' || password.trim() === '') {
            setDisenoAlert('danger');
            setMsgAlert('Todos los campos son obligatorios.');
            setShowAlert(true);
            return;
        }

        // Simulación de validación en base de datos
        if (correo === 'admin@huertohogar.cl' && password === 'admin123') {
            setDisenoAlert('success');
            setMsgAlert('Bienvenido al panel de administración.');
            setShowAlert(true);
            setIsLoggedIn(true);
        } else {
            setDisenoAlert('danger');
            setMsgAlert('Credenciales incorrectas. Intente nuevamente.');
            setShowAlert(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCorreo('');
        setPassword('');
        setShowAlert(false);
    };

    return (
        <div className="modal fade" id="modalAdmin" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-lg border-0">
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title fw-bold">Acceso de Administrador</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={handleLogout}></button>
                    </div>
                    <div className="modal-body p-4">
                        
                        <App_alert 
                            mostrarAlerta={showAlert} 
                            cerrarAlerta={() => setShowAlert(false)} 
                            variant={disenoAlert} 
                            msg={msgAlert}
                        />
                        
                        {!isLoggedIn ? (
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Correo electrónico</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="admin@huertohogar.cl" 
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Contraseña</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="******" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark">Ingresar al Sistema</button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center py-4">
                                <div className="mb-3">
                                    <span className="display-1">⚙️</span>
                                </div>
                                <h4 className="text-success fw-bold mb-3">¡Sesión iniciada!</h4>
                                <p className="text-muted">El módulo de gestión de inventario y control de usuarios se conectará a la base de datos en la próxima actualización.</p>
                                <button className="btn btn-outline-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}