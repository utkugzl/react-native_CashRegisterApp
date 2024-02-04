import React from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {TouchableOpacity, Text} from 'react-native';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const FilterButton = ({title, onPress, selected}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.filterButtonContainer,
        {borderBottomWidth: selected ? 0 : 5},
        {backgroundColor: isDarkMode ? '#222831' : '#DDDDDD'},
      ]}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
