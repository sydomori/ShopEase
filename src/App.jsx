import React from 'react'
import Dashboard from './components/Dashboard'
import './App.css'
import { useState } from 'react'
import Navbar from './components/NavBar'
import { useEffect } from 'react'

function App() {
  const url = "http://localhost:6002/products";
  const [products,setProducts] = useState([]);

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
  
  return (
      <div className="App">
          <Navbar onAddProduct={addProduct} />
          <Dashboard products={products} />
      </div>
  )
}

export default App
