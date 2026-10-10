import React, { useState } from 'react';

export default function Blog() {
  // Estado para controlar qué artículo está abierto (null significa que ninguno está abierto)
  const [articuloAbierto, setArticuloAbierto] = useState(null);

  // Función para cerrar cualquier artículo
  const cerrarArticulo = () => setArticuloAbierto(null);

  return (
    <div className="container mt-5 mb-5" id="blog">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Nuestro Blog</h2>
        <p className="text-muted">Descubre los increíbles beneficios para la salud de los alimentos que llevamos a tu mesa.</p>
      </div>

      <div className="row g-4">
        {/* Tarjeta 1 - Palta */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" 
              className="card-img-top" 
              alt="Palta Hass" 
              style={{ height: "200px", objectFit: "cover" }} 
            />
            <div className="card-body d-flex flex-column">
              <div><span className="badge bg-success mb-2">Súper Alimento</span></div>
              <h5 className="card-title fw-bold">El poder de la Palta Hass</h5>
              <p className="card-text text-muted flex-grow-1">Rica en grasas saludables, la palta ayuda a reducir el colesterol y mejora la salud del corazón. ¡Un infaltable nutritivo!</p>
              {/* Evento onClick para abrir el artículo de la palta */}
              <button 
                className="btn btn-outline-success mt-3 w-100" 
                onClick={() => setArticuloAbierto('palta')}
              >
                Leer artículo
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 - Arándanos */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500" 
              className="card-img-top" 
              alt="Arándanos frescos" 
              style={{ height: "200px", objectFit: "cover" }} 
            />
            <div className="card-body d-flex flex-column">
              <div><span className="badge bg-info text-dark mb-2">Antioxidantes</span></div>
              <h5 className="card-title fw-bold">Juventud en cada bocado</h5>
              <p className="card-text text-muted flex-grow-1">Estas pequeñas frutas son una bomba de antioxidantes. Protegen tu cerebro y ayudan a combatir el envejecimiento celular de forma natural.</p>
              <button 
                className="btn btn-outline-success mt-3 w-100" 
                onClick={() => setArticuloAbierto('arandanos')}
              >
                Leer artículo
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 - Espinaca */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" 
              className="card-img-top" 
              alt="Hojas de espinaca" 
              style={{ height: "200px", objectFit: "cover" }} 
            />
            <div className="card-body d-flex flex-column">
              <div><span className="badge bg-warning text-dark mb-2">Energía</span></div>
              <h5 className="card-title fw-bold">Energía inagotable</h5>
              <p className="card-text text-muted flex-grow-1">Cargada de hierro, calcio y vitaminas. La espinaca fortalece tus huesos y te da la energía necesaria para afrontar el día con máxima vitalidad.</p>
              <button 
                className="btn btn-outline-success mt-3 w-100" 
                onClick={() => setArticuloAbierto('espinaca')}
              >
                Leer artículo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- RENDERIZADO CONDICIONAL DE LOS ARTÍCULOS --- */}
      
      {/* Artículo Palta */}
      {articuloAbierto === 'palta' && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title fw-bold">El poder de la Palta Hass</h5>
                <button type="button" className="btn-close btn-close-white" onClick={cerrarArticulo}></button>
              </div>
              <div className="modal-body p-4">
                <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800" className="img-fluid rounded mb-4 w-100" style={{maxHeight: '300px', objectFit: 'cover'}} alt="Palta" />
                <h4 className="fw-bold">Mucho más que un buen sabor</h4>
                <p>La palta es uno de los pocos frutos que contiene una gran cantidad de grasas saludables (ácido oleico), las cuales son fundamentales para reducir la inflamación y proteger el corazón.</p>
                <p>Además, es increíblemente rica en potasio (¡tiene más que los plátanos!) y está cargada de fibra, lo que ayuda a mantenerte saciado por más tiempo y beneficia la digestión. Al comprar tus paltas en HuertoHogar, te aseguras de recibir un producto cultivado con respeto por la tierra y listo para tu consumo familiar.</p>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary" onClick={cerrarArticulo}>Cerrar artículo</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Artículo Arándanos */}
      {articuloAbierto === 'arandanos' && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-info text-dark">
                <h5 className="modal-title fw-bold">Arándanos: Juventud en cada bocado</h5>
                <button type="button" className="btn-close" onClick={cerrarArticulo}></button>
              </div>
              <div className="modal-body p-4">
                <img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800" className="img-fluid rounded mb-4 w-100" style={{maxHeight: '300px', objectFit: 'cover'}} alt="Arándanos" />
                <h4 className="fw-bold">El rey de los antioxidantes</h4>
                <p>Considerados un verdadero "súper alimento", los arándanos tienen una de las capacidades antioxidantes más altas de todas las frutas y verduras populares. Su consumo regular ayuda a proteger tu cuerpo del daño celular causado por los radicales libres.</p>
                <p>Son bajos en calorías pero altos en nutrientes, aportando vitamina C, vitamina K y manganeso. Añadirlos a tu avena, yogurt o simplemente comerlos solos es una excelente decisión para mantener tu memoria aguda y tu sistema inmunológico fuerte.</p>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary" onClick={cerrarArticulo}>Cerrar artículo</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Artículo Espinaca */}
      {articuloAbierto === 'espinaca' && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-warning text-dark">
                <h5 className="modal-title fw-bold">Espinaca para una energía inagotable</h5>
                <button type="button" className="btn-close" onClick={cerrarArticulo}></button>
              </div>
              <div className="modal-body p-4">
                <img src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800" className="img-fluid rounded mb-4 w-100" style={{maxHeight: '300px', objectFit: 'cover'}} alt="Espinaca" />
                <h4 className="fw-bold">Verde que te quiero verde</h4>
                <p>La espinaca es famosa por una buena razón. Es una fuente excepcional de hierro, el cual es crucial para crear hemoglobina y transportar oxígeno a todo tu cuerpo. Si te sientes cansado frecuentemente, sumar espinaca a tu dieta puede marcar la diferencia.</p>
                <p>También es rica en calcio para los huesos y contiene luteína, que protege la salud de tus ojos. Ya sea en batidos verdes, ensaladas frescas o salteada con ajo, la espinaca de HuertoHogar llegará a tu casa crujiente y llena de vitalidad.</p>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary" onClick={cerrarArticulo}>Cerrar artículo</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}