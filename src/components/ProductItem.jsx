import Button from './Button';

const ProductItem = ({ product }) => {
  return (
    <li>
        <p>{product}</p>
        <Button text="Buy" />
    </li>
  )
}

export default ProductItem