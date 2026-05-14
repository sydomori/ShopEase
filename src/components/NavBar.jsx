import '../styles/NavBar.css';
import AddProductForm from './AddProductForm';

function NavBar() {
    return (
        <nav className="navbar">
            <h1 className="logo">ShopEase</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search products..." />
                <button onClick={() => console.log('Search clicked')}>Search</button>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/profile">My Profile</a></li>
                <button className="cart-button" onClick={() => console.log('Cart clicked')}>
                    View Cart
                </button>
            </ul>
            <div className="form-section">
                <AddProductForm />
            </div>
        </nav>
    )
}

export default NavBar;