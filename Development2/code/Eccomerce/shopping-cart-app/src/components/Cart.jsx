import React from 'react';
import'../App.css';

const Cart = ({ cartItems, removeFromCart, adjustQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name} - ${item.price} x {item.quantity}</span>
              <button onClick={() => adjustQuantity(item.id, 'increase')}>+</button>
              <button onClick={() => adjustQuantity(item.id, 'decrease')}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${getTotalPrice()}</h3>
    </div>
  );
};

export default Cart;
