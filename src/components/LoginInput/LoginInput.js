import React from 'react';
import {useRef} from 'react';
import {TextInput, View} from 'react-native';

import style from './style.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const LoginInput = ({placeholder, keyboardType, onChange, isSecure}) => {
  return (
    <View>
      <TextInput
        style={{
          width: scaleByWidth('35'),
          height: scaleByHeight('6'),
          margin: 10,
          padding: 5,
        }}
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
