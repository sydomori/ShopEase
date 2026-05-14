import React from "react";
import ItemCard from "./components/ItemCard";
import AddProductForm from "./components/AddProductForm";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Shop.ease</h1>
      </header>

      <main className="content-container">
        {/* Form Section */}
        <section className="form-section">
          <AddProductForm />
        </section>

        <hr className="section-divider" />

        {/* Inventory Section */}
        <section className="inventory-section">
          <h2>Available Products</h2>
          <div className="product-grid">
            <ItemCard />
            <ItemCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;