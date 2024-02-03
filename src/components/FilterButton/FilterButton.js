import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles.js';

const FilterButton = ({title, onPress, selected}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.filterButtonContainer,
        {backgroundColor: selected ? '#4D89B4' : 'transparent'},
      ]}>
      <Text style={[styles.textStyle, {color: selected ? 'white' : 'black'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
