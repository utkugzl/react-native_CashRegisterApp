import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CartButton = ({title, onPress, color}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: color,
        flex: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CartButton;
