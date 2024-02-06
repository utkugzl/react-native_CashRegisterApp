import React from 'react';
import {createContext, useState, useEffect} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    setCurrentDate(formattedDate);

    const time = `${date.getHours()}:${date.getMinutes()}`;
    setCurrentTime(time);
  }, []);

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
        currentDate,
        currentTime,
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
