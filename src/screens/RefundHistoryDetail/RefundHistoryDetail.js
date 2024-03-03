import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useTranslation} from 'react-i18next';
import RefundHistoryDetailList from '../../components/RefundHistoryDetailList/RefundHistoryDetailList.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const RefundHistoryDetail = ({route}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
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
        <View style={styles.bodyLeftSectionContainer}>
          <View style={styles.bodyTitleContainer}>
            <Text style={styles.titleText}>{t('refunded-products')}</Text>
          </View>
          <View style={styles.bodySectionContainer}>
            <RefundHistoryDetailList refund={refund} />
          </View>
        </View>
        <View style={styles.bodyRightSectionContainer}>
          <View style={styles.bodyTitleContainer}>
            <Text style={styles.titleText}>{t('refund-reasons')}</Text>
          </View>
          <View style={styles.bodySectionContainer}>
            <Text style={styles.text}>{refund.refundReason}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
};

export default RefundHistoryDetail;
