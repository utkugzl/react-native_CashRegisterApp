import React from 'react';
import {useState, useContext} from 'react';
import {View, Text, Switch} from 'react-native';

import {ThemeContext} from '../../contexts/ThemeContext.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
import AppIcons from '../AppIcons/AppIcons.js';

const SettingsOption = ({title, iconName}) => {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  return (
    <View style={styles.optionContainer}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(prev => !prev)}
          thumbColor={isDarkMode ? '#47D047' : '#d14747'}
          trackColor={isDarkMode ? '#82db82' : '#ce6363'}
        />
      </View>
      <View style={styles.iconContainer}>
        <AppIcons name={iconName} />
      </View>
    </View>
  );
};

export default SettingsOption;
