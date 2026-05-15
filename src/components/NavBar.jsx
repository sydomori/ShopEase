import '../styles/NavBar.css';
import AddProductForm from './addProductForm';


function NavBar({onAddProduct, searchTerm, setSearchTerm}) {
    return (
        <nav className="navbar">
            <div className="top-section">
                <p>Welcome to</p>
                <h1 className="logo">ShopEase</h1>
            </div>

            <div className="form-section d-flex flex-column gap-3">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <AddProductForm onAddProduct={onAddProduct} />
            </div>
        </nav>
    )
}

function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <div className="search-section">
            <input className='form-control searchBar' type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    )
}

export default NavBar;