export default function Blog() {
  return (
    <div className="container mt-5" id="blog">
        <h1 className="text-center mb-4">Blog de Alimentación Saludable y Sostenibilidad</h1>
        <section>
            <h2 className="mb-3">Noticias y consejos</h2>
            <div className="row">
                <article className="col-md-4 mb-3">
                    <div className="card h-100 p-3 shadow-sm border-0 bg-light">
                        <h3 className="h5 fw-bold">Beneficios de una alimentación saludable</h3>
                        <p className="text-muted">Una alimentación saludable ayuda a mantener nuestro cuerpo fuerte y prevenir enfermedades. Es importante consumir frutas, verduras, proteínas y beber suficiente agua.</p>
                    </div>
                </article>
                <article className="col-md-4 mb-3">
                    <div className="card h-100 p-3 shadow-sm border-0 bg-light">
                        <h3 className="h5 fw-bold">Alimentación y sostenibilidad</h3>
                        <p className="text-muted">Elegir alimentos de temporada y productos locales ayuda a reducir el impacto ambiental y favorece una alimentación más sostenible.</p>
                    </div>
                </article>
                <article className="col-md-4 mb-3">
                    <div className="card h-100 p-3 shadow-sm border-0 bg-light">
                        <h3 className="h5 fw-bold">Reducir el desperdicio</h3>
                        <p className="text-muted">Podemos cuidar el medioambiente planificando nuestras compras, aprovechando las sobras y evitando comprar más alimentos de los que necesitamos.</p>
                    </div>
                </article>
            </div>
        </section>
    </div>
  );
}