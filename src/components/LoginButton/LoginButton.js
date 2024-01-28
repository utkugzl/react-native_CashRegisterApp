import React from 'react';
import {Text, View, Pressable} from 'react-native';

import styles from './styles.js';

const LoginButton = ({title, onPress}) => {
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
