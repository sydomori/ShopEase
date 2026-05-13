function ProductCard() {
  return (
    <div>
      <div className="product-img-container">
        <img className="product-img" src="" alt="product-img" />
      </div>
      <div>
        <div className="product-category"></div>
        <div className="product-header-container">
          <p className="product-name"></p>
          <div className="product-rating-container">
            <div className="add-to-fav-container">
              <img src="" alt="star" />
            </div>
            <p className="product-rating"></p>
          </div>
        </div>
        <div className="product-footer-container">
          <p className="product-price"></p>
          <button className="btn-primary add-to-cart" type=""></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
