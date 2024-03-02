import React from 'react';

import {TouchableOpacity, Text} from 'react-native';
import styles from './styles.js';

const RefundReasonModalButton = ({title, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, {backgroundColor: color}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RefundReasonModalButton;
