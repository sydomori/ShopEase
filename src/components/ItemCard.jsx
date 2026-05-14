import React from 'react';
import  '../styles/ItemCard.css';

function ItemCard({ name, price, image, category }) {
  return (
    <div className="item-card">
      <img src={image} alt={name} />
      <div className='card-content'>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{category}</p>
      </div>
      <div className='button-grp'>
        <button type='button' className='btn btn-primary'>Edit</button>
        <button type='button' className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
}

export default ItemCard;