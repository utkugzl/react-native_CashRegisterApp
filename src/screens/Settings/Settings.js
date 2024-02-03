import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import styles from './styles.js';

const Settings = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/32bitlogo.png')}
          style={{width: 400, height: 120}}
        />
      </View>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
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
      </View>
    </SafeAreaView>
  );
};

export default Settings;
