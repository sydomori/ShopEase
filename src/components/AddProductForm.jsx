import React from 'react';
import { useState } from 'react';

function AddProductForm() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Product added:', { productName, price, imageUrl });
    }
    
    const product = {
        name: productName,
        price: price,
        image: imageUrl
    }

    console.log('New Product:', product);

    
    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                    required 
                />
                <button type="submit">Add Product</button>
            </form>
        </div>  
    )
}

export default AddProductForm;