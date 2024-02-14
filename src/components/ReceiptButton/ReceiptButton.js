import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AppIcons from '../AppIcons/AppIcons.js';

const ReceiptButton = ({title, onPress, color, iconName}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        width: '40%',
        height: 60,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        margin: 24,
      }}>
      <View style={{marginRight: 8}}>
        <AppIcons name={iconName} />
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
          marginRight: 8,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ReceiptButton;
