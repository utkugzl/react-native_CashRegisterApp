import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {SafeAreaView, View, Text, Alert, Modal} from 'react-native';
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import CartButton from '../../components/CartButton/CartButton.js';
import PaymentKeyboard from '../../components/PaymnetKeyboard/PaymnetKeyboard.js';
import ShoppingReceipt from '../../components/ShoppingReceipt/ShoppingReceipt.js';
import ReceiptButton from '../../components/ReceiptButton/ReceiptButton.js';
import CartList from '../../components/CartList/CartList.js';

const RefundProduct = ({route}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [visibleReceipt, setVisibleReceipt] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {isStoreOnline} = useContext(StoreContext);
  const {user} = useContext(UserContext);
  const {updateOfflineSalesCount} = useContext(ReportsContext);
  const {
    cart,
    totalPrice,
    discountedTotalPrice,
    currentDate,
    currentTime,
    setCart,
    setTotalPrice,
    setDiscountedTotalPrice,
    removeFromCart,
    cashPayment,
    creditCardPayment,
    cashBack,
    setCashBack,
    setCashPayment,
    setCreditCardPayment,
    setCampaignId,
  } = useContext(CartContext);
  const storeStatusText = isStoreOnline
    ? t('store-online')
    : t('store-offline');
  const storeStatusIcon = isStoreOnline ? 'onlineIcon' : 'offlineIcon';
  const {sale} = route.params;
  useEffect(() => {
    setCashBack(
      cashPayment + creditCardPayment - discountedTotalPrice > 0
        ? cashPayment + creditCardPayment - discountedTotalPrice
        : 0,
    );
  }, [
    discountedTotalPrice,
    cashPayment,
    creditCardPayment,
    cashBack,
    setCashBack,
  ]);

  useEffect(() => {
    setCart(sale.cart);
    setTotalPrice(sale.total);
    setDiscountedTotalPrice(sale.total);
  }, [sale.cart, sale.total, setCart, setDiscountedTotalPrice, setTotalPrice]);

  const handleRowCancel = () => {
    if (selectedItem) {
      removeFromCart(selectedItem);
      setSelectedItem(null);
    } else {
      Alert.alert('Uyarı', 'Lütfen bir ürün seçin.');
    }
  };

  const handleRefundCancel = () => {
    setTotalPrice(0);
    setDiscountedTotalPrice(0);
    setCart([]);
    setSelectedItem(null);
    navigation.goBack();
  };

  const handleRefund = () => {
    //setVisibleReceipt(true);
    const updatedSale = {
      id: sale.id,
      date: sale.date,
      time: sale.time,
      cashierCode: sale.cashierCode,
      cash: sale.cash,
      creditCard: sale.creditCard,
      cashBack: (sale.cash + sale.creditCard - totalPrice).toFixed(2),
      total: discountedTotalPrice.toFixed(2),
      cart: cart,
    };
    if (isStoreOnline) {
      updateSale(updatedSale);
    } else {
      //saveSaleLocally(sale);
    }
  };

  const updateSale = async putSale => {
    const url = 'http://10.0.2.2:3000/sales/' + putSale.id;

    axios
      .put(url, putSale)
      .then(response => {
        Alert.alert('İade', 'İade işlemi başarılı.');
        setTotalPrice(0);
        setDiscountedTotalPrice(0);
        setCart([]);
        setSelectedItem(null);
        navigation.navigate('saleHistory');
      })
      .catch(error => {
        console.error('POST isteği başarısız:', error);
      });
  };

  const saveSaleLocally = async sale => {
    try {
      let sales = await AsyncStorage.getItem('offlineSales');
      sales = sales ? JSON.parse(sales) : [];
      sales.push(sale);
      await AsyncStorage.setItem('offlineSales', JSON.stringify(sales));
      console.log('Sale saved locally:', sale);
      updateOfflineSalesCount();
    } catch (error) {
      console.error('Error saving sale locally:', error);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#222831', flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            padding: 12,
          }}>
          <CartButton
            title="İade Bitir"
            color={'#e28010'}
            onPress={handleRefund}
          />
          <View style={{flex: 0.5}}></View>
          <CartButton
            title="Satır İptal"
            onPress={handleRowCancel}
            color={'#862727'}
          />
          <View style={{flex: 1}}></View>
          <CartButton
            title="İşlem İptal"
            onPress={handleRefundCancel}
            color={'#862727'}
          />
        </View>
        <View
          style={{
            backgroundColor: '#505860',
            borderWidth: 1,
            flex: 2,
          }}>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4,
            }}>
            <CartList cart={cart} setSelectedItem={setSelectedItem} />
          </View>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 0.8,
              borderWidth: 8,
              borderRadius: 16,
            }}>
            <View
              style={{
                backgroundColor: '#222831',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderBottomWidth: 4,
                borderTopStartRadius: 16,
                borderTopEndRadius: 16,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Ara Toplam
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {totalPrice}₺
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#222831',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderBottomStartRadius: 16,
                borderBottomEndRadius: 16,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Toplam Tutar
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {discountedTotalPrice}₺
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 0.08, flexDirection: 'row', borderWidth: 2}}>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 16,
            }}>
            Kasiyer Kodu : {user}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            {currentDate}
            {'--'}
            cash-
            {sale.cash}
            cre-
            {sale.creditCard}
            {'----'}
            {totalPrice - (sale.cash + sale.creditCard)}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{margin: 5}}>
              <AppIcons name={storeStatusIcon} />
            </View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: isStoreOnline ? 'green' : 'red',
                marginRight: 16,
              }}>
              {storeStatusText}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RefundProduct;
