import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {SafeAreaView, View, Text, Alert, Modal, TextInput} from 'react-native';
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import email from 'react-native-email';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import CartButton from '../../components/CartButton/CartButton.js';
import PaymentKeyboard from '../../components/PaymnetKeyboard/PaymnetKeyboard.js';
import ShoppingReceipt from '../../components/ShoppingReceipt/ShoppingReceipt.js';
import ReceiptButton from '../../components/ReceiptButton/ReceiptButton.js';
import CartList from '../../components/CartList/CartList.js';
import MailBoxButton from '../../components/MailBoxButton/MailBoxButton.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Payment = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [visibleReceipt, setVisibleReceipt] = useState(false);
  const [visibleEmailInput, setVisibleEmailInput] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {isStoreOnline} = useContext(StoreContext);
  const {user} = useContext(UserContext);
  const {isDarkMode} = useContext(ThemeContext);
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
  const [isDocumentFinishDisabled, setIsDocumentFinishDisabled] =
    useState(true);
  const [customerEmail, setCustomerEmail] = useState('');
  const [receiptPDFpath, setReceiptPDFpath] = useState('');

  const storeStatusText = isStoreOnline
    ? t('store-online')
    : t('store-offline');
  const storeStatusIcon = isStoreOnline ? 'onlineIcon' : 'offlineIcon';
  const styles = isDarkMode ? stylesDark : stylesLight;

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
      if (cart.length === 0) {
        setCustomerEmail('');
        navigation.goBack();
      }
    } else {
      Alert.alert('Uyarı', 'Lütfen bir ürün seçin.');
    }
  };

  const handleDocumentCancel = () => {
    if (cart.length > 0) {
      setTotalPrice(0);
      setDiscountedTotalPrice(0);
      setCart([]);
      setSelectedItem(null);
      setCashPayment(0);
      setCreditCardPayment(0);
      setCustomerEmail('');
      navigation.goBack();
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
      postSale(sale);
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

  const convertToPDF2 = async () => {
    try {
      const options = {
        html: htmlTemplate,
        fileName: 'receipt',
        directory: 'Documents',
      };

      const pdf = await RNHTMLtoPDF.convert(options);
      setReceiptPDFpath(pdf.filePath);
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

  const generateMailReceipt = cart => {
    let cartText = '...\n';
    cart.forEach(product => {
      cartText += `${product.name}\n${product.barcode} (${product.quantity} x ${
        product.price
      }₺)\nToplam: ${(product.price * product.quantity).toFixed(2)}₺\n\n`;
    });
    return cartText;
  };

  const handleEmail = () => {
    if (customerEmail === '') {
      Alert.alert('Uyarı', 'E-mail adresi girilmedi.');
      return;
    }
    const to = customerEmail;

    const emailBody = `Fatura bilgileri:\n
    Tarih: ${currentDate}
    Saat: ${currentTime}
    Kasiyer Kodu: ${user}
    Alınan Para: ${(cashPayment + creditCardPayment).toFixed(2)}₺
    Para Üstü: ${cashBack.toFixed(2)}₺
    Genel Toplam: ${discountedTotalPrice.toFixed(2)}₺
    
    ${generateMailReceipt(cart)}`;

    email(to, {
      subject: 'E-Fatura',
      body: emailBody,
      checkCanOpen: false,
      isHTML: false,

      attachments: [
        {
          path: receiptPDFpath, // PDF dosyasının yolu
          type: 'application/pdf', // Dosya tipi
          name: 'receipt.pdf', // Dosya adı
        },
      ],
    }).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.sectionsContainer}>
        <View style={styles.leftSection}>
          <View style={styles.leftButtonContainer}>
            <CartButton
              title="E-Fatura"
              color={'#9c6417'}
              disabled={isDocumentFinishDisabled}
              onPress={() => {
                convertToPDF2();
                setVisibleEmailInput(true);
              }}
            />
          </View>
          <View style={styles.leftBottomContainer}></View>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.listContainer}>
            <CartList cart={cart} setSelectedItem={setSelectedItem} />
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.priceText}>{t('subtotals')}</Text>
              <Text style={styles.priceText}>{totalPrice.toFixed(2)}₺</Text>
            </View>
            <View style={styles.discountedTotalPriceContainer}>
              <Text style={styles.priceText}>{t('total-amount')}</Text>
              <Text style={styles.priceText}>
                {discountedTotalPrice.toFixed(2)}₺
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightContainer}>
            <View style={styles.finishSaleButtonContainer}>
              <CartButton
                title="Belge Bitir"
                color={'#afad21'}
                disabled={isDocumentFinishDisabled}
                onPress={() => {
                  handlePayment();
                }}
              />
            </View>
            <View style={styles.deleteButtonsContainer}>
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
      <View style={styles.footerContainer}>
        <View style={styles.cashierCodeContainer}>
          <Text style={styles.cashierCodeText}>Kasiyer Kodu : {user}</Text>
        </View>
        <View style={styles.currentDateContainer}>
          <Text style={styles.currentDateText}>
            {currentDate} Cash-{cashPayment} Cre-{creditCardPayment} --{' '}
            {discountedTotalPrice}
          </Text>
        </View>
        <View style={styles.storeStatusContainer}>
          <View style={styles.storeStatusIconContainer}>
            <View style={styles.iconContainer}>
              <AppIcons name={storeStatusIcon} />
            </View>
            <Text
              style={[
                styles.storeStatusText,
                {
                  color: isStoreOnline ? 'green' : 'red',
                },
              ]}>
              {storeStatusText}
            </Text>
          </View>
        </View>
      </View>
      <Modal visible={visibleReceipt}>
        <View style={styles.receiptModalContainer}>
          <View style={styles.receiptModalLeft}>
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
                setCustomerEmail('');
                navigation.goBack();
              }}
              color={'#2287da'}
              iconName={'closeIcon'}
            />
          </View>
          <View style={styles.receiptModalCenter}>
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
          <View style={styles.receiptModalRight}>
            <ReceiptButton
              title="Yazdır"
              onPress={convertToPDF}
              color={'#2287da'}
              iconName={'printerIcon'}
            />
            <ReceiptButton
              title="E-Mail"
              onPress={handleEmail}
              color={'#2287da'}
              iconName={'mailIcon'}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleEmailInput}
        onRequestClose={() => {
          setVisibleEmailInput(!visibleEmailInput);
        }}>
        <View style={styles.emailModal}>
          <View style={styles.emailModalContainer}>
            <View style={styles.flex2}>
              <View style={styles.emailInputContainer}>
                <TextInput
                  style={styles.emailInput}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={text => setCustomerEmail(text)}
                />
              </View>
            </View>
            <View style={styles.emailButtonsContainer}>
              <MailBoxButton
                onPress={() => {
                  setVisibleEmailInput(!visibleEmailInput);
                  setCustomerEmail('');
                }}
                title="Kapat"
                color="#b9340f"
              />
              <MailBoxButton
                onPress={() => {
                  setVisibleEmailInput(!visibleEmailInput);
                }}
                title="Kaydet"
                color="#19b021"
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Payment;
