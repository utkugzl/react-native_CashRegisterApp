import React from 'react';
import {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
import AppIcons from '../AppIcons/AppIcons.js';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SettingsOption = ({title, iconName, navigation, screenName}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const onPressHandler = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity
      style={styles.optionContainer}
      activeOpacity={0.9}
      onPress={onPressHandler}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <AppIcons name={'rightArrowIcon'} />
      </View>
      <View style={styles.iconContainer}>
        <AppIcons name={iconName} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsOption;
