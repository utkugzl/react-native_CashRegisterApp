import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useTranslation} from 'react-i18next';
import RefundsHistoryList from '../../components/RefundsHistoryList/RefundsHistoryList.js';
import useFetch from '../../hooks/useFetch.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const RefundHistory = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  const {data: refunds, loading} = useFetch('http://10.0.2.2:3000/refunds');

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screenInnerContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.title}>{t('refund-history')}</Text>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <RefundsHistoryList refunds={refunds} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RefundHistory;
