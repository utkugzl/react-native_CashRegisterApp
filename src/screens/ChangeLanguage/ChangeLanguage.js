import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import LanguageButton from '../../components/LanguageButton/LanguageButton.js';
import i18next from '../../locales/i18next.js';

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
          onPress={() => {
            i18next.changeLanguage('tr');
          }}
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
          onPress={() => {
            i18next.changeLanguage('en');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;
