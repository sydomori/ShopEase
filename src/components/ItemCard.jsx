import React from "react";

function ItemCard({ title, price, thumbnail, category }) {

  return (
    <div className="item-card">
      <img src={thumbnail} alt={title} />
      <div className='card-content'>
        <h3>{title}</h3>
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