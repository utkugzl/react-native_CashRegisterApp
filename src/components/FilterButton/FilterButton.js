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
        {backgroundColor: selected ? '#D5D1A5' : 'transparent'},
        {borderBottomWidth: selected ? 0 : 3},
      ]}>
      <Text style={[styles.textStyle, {color: selected ? 'white' : 'black'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
