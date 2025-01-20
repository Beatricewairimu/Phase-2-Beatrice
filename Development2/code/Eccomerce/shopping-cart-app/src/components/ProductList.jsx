import React from 'react';
import'../App.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
