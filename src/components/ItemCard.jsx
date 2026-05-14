import React from 'react';
import  '../styles/ItemCard.css';

function ItemCard({ name, price, image, category }) {
  return (
    <div className="item-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{category}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ItemCard;