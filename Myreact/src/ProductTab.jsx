// ProductTab.js
import Product from "./product";
import './Product.css';

function ProductTab() {
  const products = [
    { title: "Apple Pencil (2nd Edition)", desc: "Nice thing", oldPrice: "112", newPrice: "99" },
    { title: "Zebronics Mouse", desc: "Very Nice thing", oldPrice: "233", newPrice: "99" },
    { title: "Samsung Galaxy", desc: "Not Nice thing", oldPrice: "343", newPrice: "99" },
    { title: "Tissue", desc: "Ok Nice thing", oldPrice: "676", newPrice: "99" },
  ];

  return (
    <div className="ProductTab">
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          desc={product.desc}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  );
}

export default ProductTab;
