import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import axios from 'axios';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const HeaderComponent = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>FlatList Başlık</Text>
    </View>
  );
};

const SaleHistory = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const {offlineSalesCount} = useContext(ReportsContext);
  const [sales, setSales] = useState([]);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const fetchSales = async () => {
    try {
      const url = 'http://10.0.2.2:3000/sales';
      const response = await axios.get(url);
      setSales(response.data);
      console.log('response.data:', response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchSales();
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, backgroundColor: 'brown'}}></View>
      {offlineSalesCount > 0 && (
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
      )}
    </SafeAreaView>
  );
};

export default SaleHistory;
