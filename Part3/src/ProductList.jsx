// src/ProductList.js
import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 },
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
