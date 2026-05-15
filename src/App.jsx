import React from 'react'
import Dashboard from './components/Dashboard'
import './App.css'
import { useState } from 'react'
import Navbar from './components/NavBar'
import { useEffect } from 'react'

function App() {
  const url = "http://localhost:6002/products";
  const [products,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  function editProduct(id, updatedProduct){
    fetch(`${url}/${id}`,{
      method: "PATCH",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      return response.json();
    })
    .then((updatedProduct) => {
      setProducts((prevProducts) => prevProducts.map((product) => product.id === id ? updatedProduct : product))
    })
    .catch((error) => {
      console.error("Error updating product:", error)
    })
  }


  function fetchProducts(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setProducts(data)
    })
  }

  function addProduct(product){
    fetch(url,{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      return response.json();
    })
    .then((newProduct) => {
      setProducts((prevProducts) => [...prevProducts, newProduct])
    })
    .catch((error) => {
      console.error("Error adding product:", error)
    })
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])
  
  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
      <div className="App">
          <Navbar onAddProduct={addProduct} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Dashboard products={filteredProducts} onEditProduct={editProduct} />
      </div>
  )
}

export default App
