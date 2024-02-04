import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import SettingsSwitchOption from '../../components/SettingsSwitchOption/SettingsSwitchOption.js';
import styles from './styles.js';
import {ThemeContext} from '../../contexts/ThemeContext.js';

const Settings = ({navigation}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/32bitlogo.png')}
          style={{width: 400, height: 120}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          {isDarkMode ? 'dark' : 'light'}
        </Text>
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
          <SettingsSwitchOption title={'Koyu Tema'} iconName={'reportsIcon'} />
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
