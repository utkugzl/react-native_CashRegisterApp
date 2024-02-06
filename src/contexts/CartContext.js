import React from 'react';
import {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0);

  const addToCart = product => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedProduct = {...product, quantity: 1};
      setCart([...cart, updatedProduct]);
    }

    const price = parseFloat(product.price);
    const newTotalPrice = totalPrice + price;
    setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
  };

  const removeFromCart = product => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      const itemToRemove = updatedCart[index];

      updatedCart.splice(index, 1);
      setCart(updatedCart);

      const price = parseFloat(itemToRemove.price);
      const newTotalPrice = totalPrice - price * itemToRemove.quantity;
      setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        removeFromCart,
        setCart,
        setTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
