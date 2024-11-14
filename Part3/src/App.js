// src/App.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartProvider';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
