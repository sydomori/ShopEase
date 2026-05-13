function ProductCard({ productImg, category, name, price }) {
  return (
    <div>
      <div className="product-img-container">
        <img className="product-img" src={productImg} alt="product-img" />
      </div>
      <div>
        <p className="product-category">{category}</p>
        <p className="product-name">{name}</p>
        <div className="product-footer-container">
          <p className="product-price">{price}</p>
          <button className="add-to-cart">Add</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
