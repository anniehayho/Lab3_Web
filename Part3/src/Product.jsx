// src/Product.js
import React from 'react';
import { useCart } from './CartProvider';

function Product({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product">
      <p>{product.name} - ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
