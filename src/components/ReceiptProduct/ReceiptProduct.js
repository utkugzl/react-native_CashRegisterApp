import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ReceiptProduct = ({name, price, quantity}) => {
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        paddingHorizontal: 12,
        borderBottomWidth: 0.3,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{marginRight: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            123456
          </Text>
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          ({`${quantity} ADET X ${price}`})
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          {name}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {totalPrice}₺
        </Text>
      </View>
    </View>
  );
};

export default ReceiptProduct;

/*
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
          123456
        </Text>
      </View>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        {totalPrice}₺
      </Text>
    </TouchableOpacity>
  );

 */
