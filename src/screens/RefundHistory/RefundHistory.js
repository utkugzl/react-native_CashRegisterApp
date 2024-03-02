import React from 'react';
import {useContext, useState} from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import SalesHistoryList from '../../components/SalesHistoryList/SalesHistoryList.js';
import {useFocusEffect} from '@react-navigation/native';
import RefundsHistoryList from '../../components/RefundsHistoryList/RefundsHistoryList.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const RefundHistory = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const [refunds, setRefunds] = useState([]);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const fetchRefunds = async () => {
    try {
      const url = 'http://10.0.2.2:3000/refunds';
      const response = await axios.get(url);
      setRefunds(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  // Fetch sales and offline sales when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchRefunds();
    }, []),
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screenInnerContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.title}>{t('refund-history')}</Text>
          <RefundsHistoryList refunds={refunds} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RefundHistory;
