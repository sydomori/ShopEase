import React from "react";

function ItemCard() {
  return (
    <div className="product-card">
      <div className="badge">New</div>
      <img src="https://via.placeholder.com/200" alt="product" />
      <h3>White Shoes</h3>
      <p className="price">Ksh 2500</p>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
}

export default ItemCard;