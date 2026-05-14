import Navbar from "./NavBar";
import ItemCard from "./ItemCard";
import '../styles/Global.css';

function Dashboard({products}) {
  return (
    <div className="dashboard">
      <h2>Explore Our Products</h2>
      <ProductList products={products} />
    </div>
  );
}

function ProductList({products}) {
    return (
        <div className="item-grid">
            {products.map((product) => (
                <ItemCard key={product.id} {...product} />
            ))}
        </div>
    );
}

export default Dashboard;