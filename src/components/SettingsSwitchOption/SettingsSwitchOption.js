import React from 'react';
import {useState, useContext} from 'react';
import {View, Text, Switch} from 'react-native';

import {ThemeContext} from '../../contexts/ThemeContext.js';
import styles from './styles.js';
import AppIcons from '../AppIcons/AppIcons.js';

const SettingsOption = ({title, iconName}) => {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
  return (
    <View style={styles.optionContainer}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(prev => !prev)}
        />
      </View>
      <View style={styles.iconContainer}>
        <AppIcons name={iconName} />
      </View>
    </View>
  );
};

export default SettingsOption;
