import ProductCard from "./ProductCard"

function ProductList() {
  return (
    <div>
      <ProductCard
        productImg={"https://i.pinimg.com/1200x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"}
        category={"Category"}
        name={"Test product"}
        price={"KES 300"}
      />
    </div>
  )
}

export default ProductList
