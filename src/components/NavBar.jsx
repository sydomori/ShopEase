import '../styles/NavBar.css';
import AddProductForm from './addProductForm';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="top-section">
                <h1 className="logo">ShopEase</h1>
                <>
                    <input className='searchBar' type="text" placeholder="Search products..." />
                    <button onClick={() => console.log('Search clicked')}>Search</button>
                </>
                
                <button className="cart-button" onClick={() => console.log('Cart clicked')}>
                    View Cart
                </button>
            
            </div>
            <div className="form-section">
                <AddProductForm />
            </div>
        </nav>
    )
}

export default NavBar;