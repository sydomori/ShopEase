import '../styles/NavBar.css';
import {useState} from 'react';
import AddProductForm from './AddProductForm';

function NavBar({addItem, search, setSearchTerm}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

     function handleSubmit(e) {
        e.preventDefault();
        const newItem = { name, price, image };
        addItem(newItem);
        setName('');
        setPrice('');
        setImage('');
    }

    return (
        <nav className="navbar">
            <div className="top-section">
                <p>Welcome to</p>
                <h1 className="logo">ShopEase</h1>
            </div>

            <div className="form-section d-flex flex-column gap-3">
                <div className="search-section">
                    <input className='form-control searchBar' type="text" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className='btn btn-primary' onClick={() => console.log('Search clicked')}>Search</button>
                </div>
                <AddProductForm onSubmit={handleSubmit} />
            </div>
        </nav>
    )
}

export default NavBar;