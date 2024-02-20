import React from 'react';
import {useContext, useState} from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SalesHistoryList from '../../components/SalesHistoryList/SalesHistoryList.js';
import {useFocusEffect} from '@react-navigation/native';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const SaleHistory = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const {offlineSalesCount} = useContext(ReportsContext);
  const [sales, setSales] = useState([]);
  const [offlineSales, setOfflineSales] = useState([]);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const fetchSales = async () => {
    try {
      const url = 'http://10.0.2.2:3000/sales';
      const response = await axios.get(url);
      setSales(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  // Fetch sales and offline sales when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchSales();
      fetchOfflineSales();
    }, []),
  );

  const fetchOfflineSales = async () => {
    try {
      const offlineSalesString = await AsyncStorage.getItem('offlineSales');
      const offline = JSON.parse(offlineSalesString) || [];
      setOfflineSales(offline);
    } catch (error) {
      console.error('Error parsing offlineSales from localStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screenInnerContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.title}>{t('sent-sales')}</Text>
          <SalesHistoryList sales={sales} />
        </View>
        {offlineSalesCount > 0 && (
          <View
            style={{
              flex: 1,
              backgroundColor: '#292f39',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginVertical: 20,
              }}>
              {t('unsent-sales')}
            </Text>
            <FlatList
              width="75%"
              data={offlineSales}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: isDarkMode ? '#30475E' : '#f2f2f2',
                    margin: 8,
                    borderRadius: 10,
                    borderWidth: 1,
                  }}>
                  <View
                    style={{
                      borderWidth: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 80,
                      width: 80,
                    }}>
                    <Image
                      source={require('../../assets/images/saleHistoryImage.png')}
                      style={{width: 60, height: 60}}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: isDarkMode ? '#DDDDDD' : '#30475E',
                        fontSize: 24,
                      }}>
                      {item.date}
                    </Text>
                    <View style={{marginLeft: 20}}></View>
                    <Text
                      style={{
                        color: isDarkMode ? '#DDDDDD' : '#30475E',
                        fontSize: 24,
                      }}>
                      {item.time}
                    </Text>
                  </View>
                  <View style={{marginRight: 25}}>
                    <Text
                      style={{
                        color: isDarkMode ? '#DDDDDD' : '#30475E',
                        fontSize: 24,
                      }}>
                      {item.total} ₺
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SaleHistory;
