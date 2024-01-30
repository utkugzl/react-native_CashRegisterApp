import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import styles from './styles.js';

const Settings = ({navigation}) => {
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
          title={'Diğer Ayarlar'}
          iconName={'otherSettingsIcon'}
        />
        <SettingsOption title={'Yazıcı Testi'} iconName={'printerIcon'} />
        <SettingsOption title={'Deneme'} iconName={'reportsIcon'} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
