import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AppIcons from '../AppIcons/AppIcons.js';
import styles from './styles.js';

const ReceiptButton = ({title, onPress, iconName}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <AppIcons name={iconName} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ReceiptButton;
