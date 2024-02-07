import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CartButton = ({title, onPress, color, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: disabled ? '#605F63' : color,
        opacity: disabled ? 0.3 : 1,
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
