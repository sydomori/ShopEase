function NavBar() {
    return (
        <nav className="navbar">
            <h1>ShopEase</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search products..." />
                <button onClick={() => console.log('Search clicked')}>Search</button>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/profile">My Profile</a></li>
                <button onClick={() => console.log('Login clicked')}>Login</button>
                <button onClick={() => console.log('Cart clicked')}> View Cart</button>
            </ul>
        </nav>
    )
}

export default NavBar;