import React from 'react';
import  '../styles/ItemCard.css';

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => console.log('Add to cart clicked')}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;