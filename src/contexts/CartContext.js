import React from 'react';
import {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = product => {
    const price = parseFloat(product.price);
    setCart([...cart, product]);
    const newTotalPrice = totalPrice + price;
    setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
  };

  const removeFromCart = product => {
    const price = parseFloat(product.price);
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    const newTotalPrice = totalPrice - price;
    setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
  };

  return (
    <CartContext.Provider value={{cart, totalPrice, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
