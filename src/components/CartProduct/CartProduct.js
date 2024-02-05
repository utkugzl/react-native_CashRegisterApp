import React from 'react';
import {View, Text} from 'react-native';

const CartProduct = ({name, price}) => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
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
          {name}
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
          123456
        </Text>
      </View>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        {price}₺
      </Text>
    </View>
  );
};

export default CartProduct;
