import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ReportsContext} from '../../contexts/ReportsContext.js';

import styles from './styles.js';

const SendSalesButton = ({title, onPress}) => {
  const {offlineSalesCount} = useContext(ReportsContext);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {offlineSalesCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{offlineSalesCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SendSalesButton;
