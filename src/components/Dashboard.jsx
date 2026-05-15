import ItemCard from "./ItemCard";
import '../styles/Global.css';
import '../styles/Dashboard.css';

function Dashboard({products, onEditProduct, onDeleteProduct}) {
  return (
    <div className="dashboard">
      <h2>Your Products</h2>
      <ProductList products={products} onEditProduct={onEditProduct} onDeleteProduct={onDeleteProduct} />
    </div>
  );
}

function ProductList({products, onEditProduct, onDeleteProduct}) {
    return (
        <div className="item-grid">
            {products.map((product) => (
                <ItemCard key={product.id} {...product} onEditProduct={onEditProduct} onDeleteProduct={onDeleteProduct} />
            ))}
        </div>
    );
}

export default Dashboard;