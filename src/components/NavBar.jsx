import '../styles/NavBar.css';
import AddProductForm from './addProductForm';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="top-section">
                <p>Welcome to</p>
                <h1 className="logo">ShopEase</h1>
            </div>

            <div className="form-section d-flex flex-column gap-3">
                <div className="search-section">
                    <input className='form-control searchBar' type="text" placeholder="Search products..." />
                    <button className='btn btn-primary' onClick={() => console.log('Search clicked')}>Search</button>
                </div>
                <AddProductForm />
            </div>
        </nav>
    )
}

export default NavBar;