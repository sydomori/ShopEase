import React from 'react';
import { useState } from 'react';
import '../styles/AddProductForm.css';

function AddProductForm({onAddProduct}) {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = {
            name: productName,
            price: price,
            image: imageUrl,
            category: category
        }
        onAddProduct(newProduct);
        setProductName('');
        setPrice('');
        setImageUrl('');
        setCategory('');
    }
        
    return (
        <div>
            <h4>Add New Product</h4>
            <form className='d-flex flex-row gap-3' onSubmit={handleSubmit}>
                <input 
                    style={{width:'200px'}}
                    className='form-control'
                    type="text" 
                    placeholder="Product Name"
                    name="productName"
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    required 
                />
                <input 
                    style={{width:'200px'}}
                    className='form-control'
                    type="number" 
                    placeholder="Price" 
                    name="price"
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
                <input 
                    style={{width:'200px'}}
                    className='form-control'
                    type="text" 
                    placeholder="Image URL" 
                    name="imageUrl"
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                    required 
                />
                <input 
                    style={{width:'200px'}}
                    className='form-control'
                    type="text" 
                    placeholder="Category" 
                    name="category"
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    required 
                />
                <button className='btn btn-primary' type="submit">Add</button>
            </form>
        </div>  
    )
}

export default AddProductForm;