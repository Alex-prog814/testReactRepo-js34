import Button from "./Button"
import ProductItem from "./ProductItem"

const ProductsList = ({ products }) => {
  return (
      <>
        <ul>
            {products.map(product => (
                <ProductItem product={product} />
            ))}
        </ul>
        <Button text="Go to cart" />
      </>
  )
}

export default ProductsList