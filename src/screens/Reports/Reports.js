import React from 'react';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import ReportsOption from '../../components/ReportsOption/ReportsOption.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Reports = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {isDarkMode} = useContext(ThemeContext);
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');

  const styles = isDarkMode ? stylesDark : stylesLight;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoImageSource} style={styles.image} />
      </View>
      <View style={styles.optionsSection}>
        <View style={styles.optionsContainer}>
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
        <View style={styles.optionsContainer}>
          <ReportsOption
            onPress={() => {
              navigation.navigate('saleHistory');
            }}
            title={t('past-sales')}
            iconName={'pastSaleIcon'}
          />
          <ReportsOption
            onPress={() => {
              navigation.navigate('refundsHistory');
            }}
            title={t('refund-history')}
            iconName={'refundProductIcon'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reports;
