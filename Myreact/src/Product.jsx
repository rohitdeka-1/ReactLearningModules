// Product.js
import './Product.css';
import Naya from './naya';

function Product({ title, desc, oldPrice, newPrice }) {
  return (
    <div className="Product">
      <p className="product-title">{title}</p>
      <p className="product-desc">{desc}</p>
      <Naya oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}

export default Product;













