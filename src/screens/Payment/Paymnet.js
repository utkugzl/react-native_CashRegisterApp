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
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
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

  const generateCartHTML = cart => {
    let cartHTML = '';
    cart.forEach(product => {
      cartHTML += `
      <div class="receipt-product">
         <div class="asdas">
          <p>${product.barcode} (${product.quantity} x ${product.price}₺)</p>
          <p>${(product.price * product.quantity).toFixed(2)}₺</p>
         </div>
          <p class="total-price">${product.name}</p>
      </div>
      `;
    });

    return cartHTML;
  };

  const htmlTemplate = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Shopping Receipt</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #f0f0f0;
          }
  
          .receipt-container {
              flex: 1;
              max-width: 500px;
              background-color: #DDDDDD;
              border-radius: 10px;
              elevation: 50;
              border-width: 2px;
              padding: 20px;
          }
  
          .company-info {
              text-align: center;
              margin-bottom: 20px;
          }
  
          .company-info h1 {
              font-size: 24px;
              font-weight: bold;
              color: black;
              margin: 0;
          }
  
          .address-info {
              text-align: center;
              margin-bottom: 10px;
          }
  
          .address-info p {
              font-size: 14px;
              font-weight: bold;
              color: black;
              margin: 0;
          }
  
          .receipt-details {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 2px solid #67666c;
              padding-bottom: 10px;
              margin-bottom: 10px;
          }
  
          .receipt-details p {
              font-weight: bold;
              font-size: 16px;
              color: black;
              margin: 0;
          }
  
          .receipt-product {
              border-bottom: 1px solid #ddd;
              padding: 10px 0;
          }

          .asdas {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        
          .total-price {
              margin-left: auto;
          }
  
          .receipt-product p {
              font-size: 14px;
              color: black;
              margin: 0;
          }
  
          .payment-summary {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 0;
              border-bottom: 2px solid #67666c;
          }
  
          .payment-summary p {
              font-weight: bold;
              font-size: 16px;
              color: black;
              margin: 0;
          }
  
          .total-amount {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 0;
          }
  
          .barcode {
              text-align: center;
              margin-top: 20px;
          }
  
          .barcode img {
              width: 250px;
              height: 40px;
              opacity: 0.6;
          }
      </style>
  </head>
  <body>
      <div class="receipt-container">
          <div class="company-info">
              <h1>32bit Bilgisayar Hizmetleri Ltd. Şti.</h1>
          </div>
          <div class="address-info">
              <p>Bağdat Cad. Kumbaracılar Sk. No:18</p>
              <p>+90 (216) 348 60 43</p>
              <p>İstanbul</p>
          </div>
          <div class="receipt-details">
              <div>
                  <p>Tarih: ${currentDate}</p>
                  <p>Saat: ${currentTime}</p>
                  <p>Kasiyer Kodu: ${user}</p>
              </div>
              <div>
                  <p>Nakit Ödeme: ${cashPayment}₺</p>
                  <p>Kredi Kartı Ödeme: ${creditCardPayment}₺</p>
              </div>
          </div>
          <div class="receipt-product">
          ${generateCartHTML(cart)}
          </div>
          <div class="payment-summary">
              <p>Alınan Para</p>
              <p>${(cashPayment + creditCardPayment).toFixed(2)}₺</p>
          </div>
          <div class="payment-summary">
              <p>Para Üstü</p>
              <p>${cashBack.toFixed(2)}₺</p>
          </div>
          <div class="total-amount">
              <p>Genel Toplam</p>
              <p>${discountedTotalPrice.toFixed(2)}</p>
          </div>
          <div class="barcode">
              <img src="https://answers.opencv.org/upfiles/1505477115167095.png" alt="Barcode">
          </div>
      </div>
  </body>
  </html>
    `;

  const convertToPDF = async () => {
    try {
      const options = {
        html: htmlTemplate,
        fileName: 'receipt',
        directory: 'Documents',
      };

      const pdf = await RNHTMLtoPDF.convert(options);
      sharePDF(pdf.filePath);
    } catch (error) {
      console.error(error);
    }
  };

  const sharePDF = async filePath => {
    try {
      const url = 'file://' + filePath;
      await Share.open({
        url,
        type: 'application/pdf',
        failOnCancel: false,
        showApps: true,
      });
    } catch (error) {
      console.log('Hata:', error.message);
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
              onPress={convertToPDF}
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
