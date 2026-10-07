import ProductCard from './ProductCard';

export default function ProductList({ productos, onAdd }) {
  return (
    <div className="container mt-5" id="productos">
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <div className="row" id="contenedorProductos">
            {productos.map(prod => (
                <ProductCard key={prod.codigo} producto={prod} onAdd={onAdd} />
            ))}
        </div>
    </div>
  );
}