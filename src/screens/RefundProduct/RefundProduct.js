import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {SafeAreaView, View, Text, Alert, Modal} from 'react-native';
import axios from 'axios';

import AppIcons from '../../components/AppIcons/AppIcons.js';
import CartButton from '../../components/CartButton/CartButton.js';
import CartList from '../../components/CartList/CartList.js';
import RefundedProductList from '../../components/RefundedProductList/RefundedProductList.js';
import RefundReasonList from '../../components/RefundReasonList/RefundReasonList.js';
import RefundReasonModalButton from '../../components/RefundReasonModalButton/RefundReasonModalButton.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const RefundProduct = ({route}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [refundItems, setRefundItems] = useState([]);
  const {isDarkMode} = useContext(ThemeContext);
  const {isStoreOnline} = useContext(StoreContext);
  const {user} = useContext(UserContext);
  const [visibleReasonModal, setVisibleReasonModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);

  const {
    cart,
    totalPrice,
    discountedTotalPrice,
    currentDate,
    currentTime,
    setCart,
    addToCart,
    setTotalPrice,
    setDiscountedTotalPrice,
    removeFromCart,
    cashPayment,
    creditCardPayment,
    cashBack,
    setCashBack,
  } = useContext(CartContext);

  const styles = isDarkMode ? stylesDark : stylesLight;
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
      setRefundItems([...refundItems, selectedItem]);
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
    const refund = {
      date: currentDate,
      time: currentTime,
      cashierCode: user,
      refundItems: refundItems,
      refundReason: selectedReason,
    };
    if (selectedReason) {
      updateSale(updatedSale);
      postRefund(refund);
    } else {
      Alert.alert(
        'Lütfen iade nedeni seçiniz',
        'İade nedeni seçmeden işlemi tamamlayamazsınız.',
      );
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

  const postRefund = async refund => {
    const url = 'http://10.0.2.2:3000/refunds';

    axios
      .post(url, refund)
      .then(response => {
        console.log('POST isteği başarılı:', response.data);
      })
      .catch(error => {
        console.error('POST isteği başarısız:', error);
      });
  };

  const handleRemoveRefundItem = index => {
    const updatedRefundItems = [...refundItems];
    updatedRefundItems.splice(index, 1);
    setRefundItems(updatedRefundItems);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.sectionsContainer}>
        <View style={styles.leftSection}>
          <View style={styles.flex1}>
            <View style={styles.buttonsContainer}>
              <CartButton
                title="İşlem İptal"
                onPress={handleRefundCancel}
                color={'#862727'}
              />
              <CartButton
                title="Ürün İade"
                onPress={handleRowCancel}
                color={'#862727'}
              />
            </View>
            <CartButton
              title="İade Bitir"
              color={'#e28010'}
              onPress={() => {
                if (refundItems.length > 0) {
                  setVisibleReasonModal(true);
                } else {
                  Alert.alert('Uyarı', 'Lütfen iade edilecek ürün seçin.');
                }
              }}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>İade Edilen Ürünler</Text>
          </View>
          <View style={styles.refundListContainer}>
            <RefundedProductList
              refundItems={refundItems}
              handleRemoveRefundItem={handleRemoveRefundItem}
              addToCart={addToCart}
            />
          </View>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.cartListContainer}>
            <CartList cart={cart} setSelectedItem={setSelectedItem} />
          </View>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 1,
              borderTopWidth: 4,
              borderLeftWidth: 4,
              borderRightWidth: 4,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              marginTop: 8,
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
              <Text style={styles.totalPriceText}>{t('subtotals')}</Text>
              <Text style={styles.totalPriceText}>
                {parseFloat(totalPrice).toFixed(2)}₺
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
              <Text style={styles.totalPriceText}>{t('total-amount')}</Text>
              <Text style={styles.totalPriceText}>
                {parseFloat(discountedTotalPrice).toFixed(2)}₺
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.cashierCodeContainer}>
          <Text style={styles.cashierCodeText}>Kasiyer Kodu : {user}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <View style={styles.storeStatusContainer}>
          <View style={styles.storeStatusIconContainer}>
            <View style={styles.icon}>
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={visibleReasonModal}>
        <View style={styles.reasonModalContainer}>
          <View style={styles.reasonModal}>
            <View style={styles.reasonModalTitleContainer}>
              <Text style={styles.reasonModalTitle}>İade Nedeni Seçiniz</Text>
            </View>
            <View style={styles.reasonModalListContainer}>
              <RefundReasonList
                selectedReason={selectedReason}
                setSelectedReason={setSelectedReason}
              />
            </View>
            <View style={styles.reasonModalButtonContainer}>
              <RefundReasonModalButton
                title="Kapat"
                color={'#862727'}
                onPress={() => {
                  setVisibleReasonModal(false);
                  setSelectedReason(null);
                }}
              />
              <RefundReasonModalButton
                title="İade Bitir"
                color={'#e28010'}
                onPress={() => {
                  handleRefund();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RefundProduct;
