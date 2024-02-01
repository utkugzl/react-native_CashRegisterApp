import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import LanguageButton from '../../components/LanguageButton/LanguageButton.js';
import i18next from '../../locales/i18next.js';
import {saveData} from '../../utils/AsyncStorage.js';

const ChangeLanguage = () => {
  const handleLanguageChange = async languageCode => {
    try {
      i18next.changeLanguage(languageCode);
      await saveData('appLanguage', languageCode);
    } catch (error) {
      console.error('Error setting language:', error);
    }
  };
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
            //handleLanguageChange('tr');
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
            //handleLanguageChange('en');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;
