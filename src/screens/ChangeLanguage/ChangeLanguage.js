import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import LanguageButton from '../../components/LanguageButton/LanguageButton.js';
import i18next from '../../locales/i18next.js';
import {saveData} from '../../utils/AsyncStorage.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const ChangeLanguage = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  /*
  const handleLanguageChange = async languageCode => {
    try {
      i18next.changeLanguage(languageCode);
      await saveData('appLanguage', languageCode);
    } catch (error) {
      console.error('Error setting language:', error);
    }
  };
  */
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.leftContainer}>
        <LanguageButton
          flagSource={require('../../assets/images/trFlag.png')}
          languageName={'Türkçe'}
          onPress={() => {
            i18next.changeLanguage('tr');
            //handleLanguageChange('tr');
          }}
        />
      </View>

      <View style={styles.rightContainer}>
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
