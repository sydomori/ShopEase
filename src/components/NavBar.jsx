import '../styles/NavBar.css';
import AddProductForm from './addProductForm';


function NavBar({onAddProduct}) {
    return (
        <nav className="navbar">
            <div className="top-section">
                <p>Welcome to</p>
                <h1 className="logo">ShopEase</h1>
            </div>

            <div className="form-section d-flex flex-column gap-3">
                <SearchBar />
                <AddProductForm onAddProduct={onAddProduct} />
            </div>
        </nav>
    )
}

function SearchBar() {
    return (
        <div className="search-section">
            <input className='form-control searchBar' type="text" placeholder="Search products..." />
            <button className='btn btn-primary'>Search</button>
        </div>
    )
}

export default NavBar;