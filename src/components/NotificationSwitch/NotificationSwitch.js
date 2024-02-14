import React from 'react';
import {useState, useContext} from 'react';
import {View, Text, Switch} from 'react-native';
import {UserContext} from '../../contexts/UserContext.js';
import {ThemeContext} from '../../contexts/ThemeContext.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
import AppIcons from '../AppIcons/AppIcons.js';

const NotificaitonSwitch = ({title, iconName}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const {isNotificationOn, setIsNotificationOn} = useContext(UserContext);

  const styles = isDarkMode ? stylesDark : stylesLight;
  return (
    <View style={styles.optionContainer}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <Switch
          value={isNotificationOn}
          onValueChange={() => setIsNotificationOn(prev => !prev)}
          thumbColor={isNotificationOn ? '#47D047' : '#d14747'}
          trackColor={isNotificationOn ? '#82db82' : '#ce6363'}
        />
      </View>
      <View style={styles.iconContainer}>
        <AppIcons name={iconName} />
      </View>
    </View>
  );
};

export default NotificaitonSwitch;
