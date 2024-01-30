import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';
import AppIcons from '../AppIcons/AppIcons.js';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SettingsOption = ({title, iconName, navigation, screenName}) => {
  const onPressHandler = () => {
    navigation.navigate(screenName);
  };
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPressHandler}>
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
