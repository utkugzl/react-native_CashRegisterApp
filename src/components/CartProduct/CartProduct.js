import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CartProduct = ({name, barcode, price, onPress, quantity}) => {
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: '#ccd226',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 12,
        margin: 2,
      }}>
      <View>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
          {name} {quantity > 1 ? `x${quantity}` : ''}
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
          {barcode}
        </Text>
      </View>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        {totalPrice}₺
      </Text>
    </TouchableOpacity>
  );
};

export default CartProduct;
