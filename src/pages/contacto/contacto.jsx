export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito. Nos pondremos en contacto.");
  };

  return (
    <div className="container mt-5 mb-5" id="contacto">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light p-4 rounded shadow-sm">
                <h2 className="text-center mb-4">Contacto</h2>
                <form id="formContacto" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="contactoNombre" className="form-label">Nombre completo</label>
                        <input type="text" className="form-control" id="contactoNombre" placeholder="Ingrese su nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactoCorreo" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="contactoCorreo" placeholder="ejemplo@correo.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactoMensaje" className="form-label">Comentario</label>
                        <textarea className="form-control" id="contactoMensaje" rows="4" placeholder="Escriba su consulta..." required></textarea>
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