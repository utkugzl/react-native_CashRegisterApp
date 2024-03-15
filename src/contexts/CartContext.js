import React from 'react';
import {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [campaignId, setCampaignId] = useState(null);
  const [cashPayment, setCashPayment] = useState(0);
  const [creditCardPayment, setCreditCardPayment] = useState(0);
  const [cashBack, setCashBack] = useState(0);

  useEffect(() => {
    // this function updates the current date and time every minute
    const updateDateTime = () => {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      setCurrentDate(formattedDate);

      const time = `${date.getHours()}:${date.getMinutes()}`;
      setCurrentTime(time);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // this function adds the product to the cart and updates the total price
  const addToCart = (product, quantityToAdd = 1) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantityToAdd;
      setCart(updatedCart);
    } else {
      const updatedProduct = {...product, quantity: quantityToAdd};
      setCart([...cart, updatedProduct]);
    }

    const price = parseFloat(product.price);
    const newTotalPrice = totalPrice + price * quantityToAdd;
    setTotalPrice(newTotalPrice);
    calculateDiscount(newTotalPrice, campaignId);
  };

  // this function removes the product from the cart and updates the total price
  const removeFromCart = product => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      const itemToRemove = updatedCart[index];

      updatedCart.splice(index, 1);
      setCart(updatedCart);

      const price = parseFloat(itemToRemove.price);
      const newTotalPrice = totalPrice - price * itemToRemove.quantity;
      setTotalPrice(newTotalPrice);
      calculateDiscount(newTotalPrice, campaignId);
    }
  };

  // this function sets the campaign context and calculates the discounted total price
  const setCampaignContext = id => {
    switch (id) {
      case '1':
        setCampaignId(id);
        calculateDiscount(totalPrice, id);
        break;
      case '2':
        if (totalPrice > 500) {
          setCampaignId(id);
          calculateDiscount(totalPrice, id);
        } else {
          console.log('Kampanya 2 için sepet tutarı yetersiz');
          Alert.alert(
            "Sepet tutarı 500 TL'nin altında olduğu için Kampanya 2 uygulanamaz.",
          );
        }
        break;
      default:
        setCampaignId(0);
    }
  };

  // this function calculates the discounted total price
  const calculateDiscount = (price, id) => {
    switch (id) {
      case '1':
        setDiscountedTotalPrice(price * 0.8);
        break;
      case '2':
        if (price > 500) {
          setDiscountedTotalPrice(price * 0.6);
        } else {
          setCampaignId(0);
          setDiscountedTotalPrice(price);
          Alert.alert(
            "Sepet tutarı 500 TL'nin altında olduğu için Kampanya 2 uygulanamaz.",
          );
        }
        break;
      default:
        setDiscountedTotalPrice(price);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
        discountedTotalPrice,
        setDiscountedTotalPrice,
        campaignId,
        setCampaignId,
        currentDate,
        currentTime,
        addToCart,
        removeFromCart,
        calculateDiscount,
        setCampaignContext,
        cashPayment,
        setCashPayment,
        creditCardPayment,
        setCreditCardPayment,
        cashBack,
        setCashBack,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
