import React from 'react';
import {useContext} from 'react';
import {Text, View, Pressable} from 'react-native';

import {ThemeContext} from '../../contexts/ThemeContext.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const LoginButton = ({title, onPress}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{color: '#700e0e'}}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default LoginButton;
