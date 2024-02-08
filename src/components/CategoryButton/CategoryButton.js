import React from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {TouchableOpacity, View, Text, ImageBackground} from 'react-native';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
const CategoryButton = ({title, backgroundImageSource, onPress}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.buttonContainer}>
      <ImageBackground
        source={backgroundImageSource}
        style={styles.imageBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryButton;
