import React from 'react';
import {useContext, useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useNavigation} from '@react-navigation/native';
import SaleHistoryDetailList from '../../components/SaleHistoryDetailList/SaleHistoryDetailList.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const SaleHistoryDetail = ({route}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const navigation = useNavigation();
  const styles = isDarkMode ? stylesDark : stylesLight;
  const {sale} = route.params;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <View style={styles.headerLeftTextContainer}>
            <Text style={styles.text}>Tarih : {sale.date} </Text>
            <Text style={styles.text}>Saat : {sale.time}</Text>
            <Text style={styles.text}>Kasiyer Kodu : {sale.cashierCode}</Text>
          </View>
        </View>
        <View style={styles.headerRightContainer}>
          <View style={styles.headerRightTextContainer}>
            <Text style={styles.text}>
              Natkit Ödenen Miktar : {sale.cash} ₺
            </Text>
            <Text style={styles.text}>
              Kredi Kartı Ödenen Miktar : {sale.creditCard} ₺
            </Text>
            <Text style={styles.text}>Para Üstü : {sale.cashBack} ₺</Text>
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
        <Text style={styles.totalText}>Toplam Tutar : {sale.total} ₺</Text>
      </View>
    </SafeAreaView>
  );
};

export default SaleHistoryDetail;
