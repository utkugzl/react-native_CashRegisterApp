import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles.js';

const FilterButton = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.filterButtonContainer}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
