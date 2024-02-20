import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const FilterOption = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={{}}>
      <Text style={{}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterOption;
