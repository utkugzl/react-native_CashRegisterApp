import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import LanguageButton from '../../components/LanguageButton/LanguageButton.js';

const ChangeLanguage = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LanguageButton
          flagSource={require('../../assets/images/trFlag.png')}
          languageName={'Türkçe'}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LanguageButton
          flagSource={require('../../assets/images/enFlag.png')}
          languageName={'English'}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;
