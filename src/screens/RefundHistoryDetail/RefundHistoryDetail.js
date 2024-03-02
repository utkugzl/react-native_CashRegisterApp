import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import SaleHistoryDetailList from '../../components/SaleHistoryDetailList/SaleHistoryDetailList.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const RefundHistoryDetail = ({route}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const navigation = useNavigation();
  const styles = isDarkMode ? stylesDark : stylesLight;
  const {refund} = route.params;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>
          {t('date')} : {refund.date}{' '}
        </Text>
        <Text style={styles.text}>
          {t('time')} : {refund.time}
        </Text>
        <Text style={styles.text}>
          {t('cashier-code')} : {refund.cashierCode}
        </Text>
      </View>
      <View style={styles.listContainer}>
        <View style={{flex: 1, backgroundColor: 'brown'}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      </View>
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
};

export default RefundHistoryDetail;
