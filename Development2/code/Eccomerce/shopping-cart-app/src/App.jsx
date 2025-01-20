import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import'./App.css';

const App = () => {
  const products = [
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Sneakers", price: 60 },
    { id: 4, name: "Hat", price: 15 },
    { id: 5, name: "Socks", price: 5 }
  ];

  // Retrieve cart from localStorage or set an empty array if none exists
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const adjustQuantity = (productId, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
            }
          : item
      );
    });
  };

  return (
    <div className="app">
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
    </div>
  );
};

export default App;
