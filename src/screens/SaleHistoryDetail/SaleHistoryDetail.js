import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import SaleHistoryDetailList from '../../components/SaleHistoryDetailList/SaleHistoryDetailList.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const SaleHistoryDetail = ({route}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const navigation = useNavigation();
  const styles = isDarkMode ? stylesDark : stylesLight;
  const {sale} = route.params;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <View style={styles.headerLeftTextContainer}>
            <Text style={styles.text}>
              {t('date')} : {sale.date}{' '}
            </Text>
            <Text style={styles.text}>
              {t('time')} : {sale.time}
            </Text>
            <Text style={styles.text}>
              {t('cashier-code')} : {sale.cashierCode}
            </Text>
          </View>
        </View>
        <View style={styles.headerRightContainer}>
          <View style={styles.headerRightTextContainer}>
            <Text style={styles.text}>
              {t('cash-payment-amount')} : {sale.cash} ₺
            </Text>
            <Text style={styles.text}>
              {t('credit-payment-amount')} : {sale.creditCard} ₺
            </Text>
            <Text style={styles.text}>
              {t('cashback-amount')} : {sale.cashBack} ₺
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <SaleHistoryDetailList sale={sale} />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('refundProduct', {sale: sale})}
          style={styles.buttonContainer}>
          <AppIcons name={'cartIcon'} />
          <Text style={styles.buttonTitle}>İade İşlemi</Text>
        </TouchableOpacity>
        <Text style={styles.totalText}>
          {t('total-amount')} : {sale.total} ₺
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SaleHistoryDetail;
