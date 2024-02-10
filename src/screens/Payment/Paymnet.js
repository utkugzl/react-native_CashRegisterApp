import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {SafeAreaView, View, Text, FlatList, Alert, Modal} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import CartProduct from '../../components/CartProduct/CartProduct.js';
import CartButton from '../../components/CartButton/CartButton.js';
import PaymentKeyboard from '../../components/PaymnetKeyboard/PaymnetKeyboard.js';
import ShoppingReceipt from '../../components/ShoppingReceipt/ShoppingReceipt.js';
import ReceiptButton from '../../components/ReceiptButton/ReceiptButton.js';

const Payment = () => {
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

  const [isDocumentFinishDisabled, setIsDocumentFinishDisabled] =
    useState(true);

  useEffect(() => {
    const newIsDocumentFinishDisabled =
      discountedTotalPrice > cashPayment + creditCardPayment;

    setCashBack(
      cashPayment + creditCardPayment - discountedTotalPrice > 0
        ? cashPayment + creditCardPayment - discountedTotalPrice
        : 0,
    );

    setIsDocumentFinishDisabled(newIsDocumentFinishDisabled);
  }, [
    discountedTotalPrice,
    cashPayment,
    creditCardPayment,
    cashBack,
    setCashBack,
  ]);

  const handleRowCancel = () => {
    if (selectedItem) {
      removeFromCart(selectedItem);
      setSelectedItem(null);
    } else {
      Alert.alert('Uyarı', 'Lütfen bir ürün seçin.');
    }
  };

  const handleDocumentCancel = () => {
    if (cart.length > 0) {
      setTotalPrice(0);
      setCart([]);
      setSelectedItem(null);
    } else {
      Alert.alert('Uyarı', 'Sepetinizde ürün bulunmamaktadır.');
    }
  };

  const handlePayment = () => {
    setVisibleReceipt(true);
    const sale = {
      date: currentDate,
      time: currentTime,
      cashierCode: user,
      cash: cashPayment,
      creditCard: creditCardPayment,
      cashBack: cashBack.toFixed(2),
      total: discountedTotalPrice.toFixed(2),
      cart: cart,
    };
    if (isStoreOnline) {
      //postSale(sale);
    } else {
      saveSaleLocally(sale);
    }
  };

  const postSale = async sale => {
    const url = 'http://10.0.2.2:3000/sales';

    axios
      .post(url, sale)
      .then(response => {
        console.log('POST isteği başarılı:', response.data);
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
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 1,
              flexDirection: 'row',
              padding: 18,
            }}>
            <CartButton
              title="E-Fatura"
              color={'#9c6417'}
              onPress={() => console.log('E-Fatura')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 4,
              flexDirection: 'row',
              padding: 8,
            }}></View>
        </View>
        <View
          style={{
            backgroundColor: '#505860',
            borderWidth: 1,
            flex: 1,
          }}>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4,
            }}>
            <FlatList
              style={{width: '100%', padding: 8}}
              key={'_'}
              data={cart}
              keyExtractor={(item, index) => `${item.id}_${index}`}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <CartProduct
                  name={item.name}
                  barcode={item.barcode}
                  price={item.price}
                  quantity={item.quantity}
                  onPress={() => {
                    setSelectedItem(item);
                  }}
                />
              )}
            />
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
                {discountedTotalPrice.toFixed(2)}₺
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}>
            <View style={{backgroundColor: '#222831', flex: 1, padding: 8}}>
              <CartButton
                title="Belge Bitir"
                color={'#afad21'}
                disabled={isDocumentFinishDisabled}
                onPress={() => handlePayment()}
              />
            </View>
            <View
              style={{
                backgroundColor: '#222831',
                flex: 1,
                flexDirection: 'row',
                padding: 8,
              }}>
              <CartButton
                title="Satır İptal"
                onPress={handleRowCancel}
                color={'#862727'}
              />
              <CartButton
                title="Belge İptal"
                onPress={handleDocumentCancel}
                color={'#862727'}
              />
            </View>
          </View>
          <PaymentKeyboard />
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
            {currentDate} Cash-{cashPayment} Cre-{creditCardPayment} --{' '}
            {discountedTotalPrice}
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
      <Modal visible={visibleReceipt}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.8}}>
            <ReceiptButton
              title="Kapat"
              onPress={() => {
                setVisibleReceipt(false);
                setCart([]);
                setCashPayment(0);
                setCreditCardPayment(0);
                setTotalPrice(0);
                setDiscountedTotalPrice(0);
                setCampaignId(0);
                navigation.goBack();
              }}
              color={'#2287da'}
              iconName={'closeIcon'}
            />
          </View>
          <View style={{flex: 1, padding: 20}}>
            <ShoppingReceipt
              date={currentDate}
              time={currentTime}
              cashierCode={user}
              cash={cashPayment}
              creditCard={creditCardPayment}
              cashBack={cashBack}
              total={discountedTotalPrice}
              cart={cart}
            />
          </View>
          <View style={{flex: 0.8, alignItems: 'flex-end'}}>
            <ReceiptButton
              title="Yazdir"
              onPress={() => {
                console.log('Yazdir');
              }}
              color={'#2287da'}
              iconName={'printerIcon'}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Payment;
