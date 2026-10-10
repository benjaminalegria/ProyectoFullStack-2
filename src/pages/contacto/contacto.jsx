import { useState } from "react";
import App_alert from "../../components/Alert";

export default function Contacto() {
    const [txtNombre, setTxtNombre] = useState("");
    const [txtCorreo, setTxtCorreo] = useState("");
    const [txtMensaje, setTxtMensaje] = useState("");
    
    // Estados para la alerta visual de Bootstrap
    const [showAlert, setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState("");
    const [disenoAlert, setDisenoAlert] = useState("primary");

    function validarTexto(valor, nombreCampo) {
        if (valor.trim().length === 0) {
            setDisenoAlert("danger");
            setMsgAlert("El campo " + nombreCampo + " no debe estar vacío.");
            setShowAlert(true);
            return true;
        }
        return false;
    }

    const guardar = (e) => {
        e.preventDefault();
        
        // Validaciones de campos vacíos
        if (validarTexto(txtNombre, "Nombre completo") === true) return;
        if (validarTexto(txtCorreo, "Correo electrónico") === true) return;
        if (validarTexto(txtMensaje, "Comentario") === true) return;
        
        // Si pasa todas las validaciones
        setDisenoAlert("success");
        setMsgAlert("Mensaje enviado con éxito. Nos pondremos en contacto.");
        setShowAlert(true);
        
        // Limpiar las cajas de texto después de enviar
        setTxtNombre("");
        setTxtCorreo("");
        setTxtMensaje("");
    };

    return (
        <div className="container mt-5 mb-5" id="contacto">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light p-4 rounded shadow-sm">
                    <h2 className="text-center mb-4">Contacto</h2>
                    
                    {/* Componente de alerta que se mostrará si hay error o éxito */}
                    <App_alert 
                        mostrarAlerta={showAlert} 
                        cerrarAlerta={() => setShowAlert(false)} 
                        variant={disenoAlert} 
                        msg={msgAlert}
                    />

                    <form onSubmit={guardar}>
                        <div className="mb-3">
                            <label htmlFor="contactoNombre" className="form-label">Nombre completo</label>
                            <input 
                                value={txtNombre} 
                                onChange={(e) => setTxtNombre(e.target.value)} 
                                type="text" 
                                className="form-control" 
                                id="contactoNombre" 
                                placeholder="Ingrese su nombre" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactoCorreo" className="form-label">Correo electrónico</label>
                            <input 
                                value={txtCorreo} 
                                onChange={(e) => setTxtCorreo(e.target.value)} 
                                type="email" 
                                className="form-control" 
                                id="contactoCorreo" 
                                placeholder="ejemplo@correo.com" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactoMensaje" className="form-label">Comentario</label>
                            <textarea 
                                value={txtMensaje} 
                                onChange={(e) => setTxtMensaje(e.target.value)} 
                                className="form-control" 
                                id="contactoMensaje" 
                                rows="4" 
                                placeholder="Escriba su consulta..."
                            ></textarea>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}