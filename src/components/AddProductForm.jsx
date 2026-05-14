import React from "react";

function AddProductForm() {
  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <div className="input-group">
        <label>Product Name *</label>
        <input type="text" placeholder="Enter product name" />
      </div>
      <button className="submit-btn">Add Product &rarr;</button>
    </div>
  );
}

export default AddProductForm;