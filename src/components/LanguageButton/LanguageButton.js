import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './styles.js';

const LanguageButton = ({flagSource, languageName, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Image
          source={flagSource}
          style={styles.flagImage}
          resizeMode="center"
        />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{languageName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LanguageButton;
