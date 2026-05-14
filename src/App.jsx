import React from "react";
// Ensure these paths are exactly correct for your folder structure
import ItemCard from "./components/ItemCard";
import AddProductForm from "./components/AddProductForm";
import "./App.css"; // This must be imported for styling to work

function App() {
  return (
    <div className="app-wrapper">
      {/* Header Section */}
      <header className="app-header">
        <h1>Shop.ease</h1>
      </header>

      <main className="content-container">
        {/* Section 1: Adding Products (matches the design you liked) */}
        <section className="form-section">
          <AddProductForm />
        </section>

        <hr className="section-divider" />

        {/* Section 2: Displaying Items */}
        <section className="inventory-section">
          <h2>Available Products</h2>
          <div className="product-grid">
            {/* You can duplicate this to see how multiple items look */}
            <ItemCard />
            <ItemCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;