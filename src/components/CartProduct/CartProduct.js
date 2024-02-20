import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';
const CartProduct = ({name, barcode, price, onPress, quantity}) => {
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.productContainer}>
      <View>
        <Text style={styles.name}>
          {name} {quantity > 1 ? `x${quantity}` : ''}
        </Text>
        <Text style={styles.barcode}>{barcode}</Text>
      </View>
      <Text style={styles.price}>{totalPrice}₺</Text>
    </TouchableOpacity>
  );
};

export default CartProduct;
