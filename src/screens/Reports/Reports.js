import React from 'react';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import ReportsOption from '../../components/ReportsOption/ReportsOption.js';

const Reports = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222831'}}>
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
          <ReportsOption
            onPress={() => {
              navigation.navigate('users');
            }}
            title={t('users')}
            iconName={'personIcon'}
          />
          <ReportsOption
            onPress={() => {
              navigation.navigate('campaigns');
            }}
            title={t('campaigns')}
            iconName={'campaignsIcon'}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <ReportsOption
            onPress={() => {
              navigation.navigate('saleHistory');
            }}
            title={t('past-sales')}
            iconName={'pastSaleIcon'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reports;
