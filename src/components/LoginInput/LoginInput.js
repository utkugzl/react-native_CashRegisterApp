import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles.js';

const LoginInput = ({placeholder, keyboardType, onChange, isSecure}) => {
  return (
    <View>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        onChangeText={onChange}
        secureTextEntry={placeholder === 'Şifre' ? isSecure : false}
      />
    </View>
  );
};

export default LoginInput;
