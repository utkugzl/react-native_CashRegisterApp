import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import SettingsSwitchOption from '../../components/SettingsSwitchOption/SettingsSwitchOption.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
import {ThemeContext} from '../../contexts/ThemeContext.js';

const Settings = ({navigation}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);

  const styles = isDarkMode ? stylesDark : stylesLight;
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={logoImageSource} style={{width: 400, height: 120}} />
      </View>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <SettingsOption
            title={'Deneme'}
            iconName={'reportsIcon'}
            navigation={navigation}
            screenName={'deneme'}
          />
          <SettingsOption title={'Deneme'} iconName={'reportsIcon'} />
          <SettingsSwitchOption
            title={t('dark-theme')}
            iconName={'darkThemeIcon'}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <SettingsOption
            title={t('other-settings')}
            iconName={'otherSettingsIcon'}
          />
          <SettingsOption title={t('printer-test')} iconName={'printerIcon'} />
          <SettingsOption
            title={t('change-language')}
            iconName={'changeLanguageIcon'}
            navigation={navigation}
            screenName={'changeLanguage'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
