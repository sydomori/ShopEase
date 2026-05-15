import React from "react";
import "../styles/ItemCard.css";
import { useState } from "react";

function ItemCard({ id,title, price, thumbnail, category, onEditProduct, onDeleteProduct }) {
   const [isEditing, setIsEditing] = useState(false);
   const [editedTitle, setEditedTitle] = useState(title);
   const [editedPrice, setEditedPrice] = useState(price);
   const [editedCategory, setEditedCategory] = useState(category);
   
  return (
    <div className="item-card">
      <img src={thumbnail} alt={title} />
      {
        isEditing ? (
          <div className="d-flex flex-column gap-3">
            <input className="form-control" type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            <input className="form-control" type="number" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
            <input className="form-control" type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
            <button type="button" className="btn btn-primary" onClick={()=>{onEditProduct(id,{title: editedTitle, price: editedPrice, category: editedCategory}); setIsEditing(false)}}>Save</button>
          </div>
        ) : (
          <div className="card-content">
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{category}</p>
            <div className="button-grp">
              <button type="button" className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => onDeleteProduct(id)}>Delete</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ItemCard;