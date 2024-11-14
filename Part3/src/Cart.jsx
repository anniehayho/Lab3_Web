// src/Cart.js
import React from 'react';
import { useCart } from './CartProvider';

function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <li>{item.name} - ${item.price} x {item.quantity}</li>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
