import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import styles from './styles.js';

const Settings = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SettingsOption
          title={'Deneme'}
          iconName={'reportsIcon'}
          navigation={navigation}
          screenName={'deneme'}
        />
        <SettingsOption title={'Deneme'} iconName={'reportsIcon'} />
        <SettingsOption title={'Deneme'} iconName={'reportsIcon'} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
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
    </SafeAreaView>
  );
};

export default Settings;
