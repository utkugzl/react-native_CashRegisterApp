import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';

const ReceiptProduct = ({name, barcode, price, quantity}) => {
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <View style={styles.productContainer}>
      <View style={styles.topInfoContainer}>
        <View style={styles.barcodeContainer}>
          <Text style={styles.barcode}>{barcode}</Text>
        </View>
        <Text style={styles.quantity}>({`${quantity} ADET X ${price}`})</Text>
      </View>
      <View style={styles.bottomInfoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{totalPrice}₺</Text>
      </View>
    </View>
  );
};

export default ReceiptProduct;
