import React from 'react';
import {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Modal,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import SettingsSwitchOption from '../../components/SettingsSwitchOption/SettingsSwitchOption.js';
import SendSalesButton from '../../components/SendSalesButton/SendSalesButton.js';
import ReceiptButton from '../../components/ReceiptButton/ReceiptButton.js';
import DummyShoppingReceipt from '../../components/DummyShoppingReceipt/DummyShoppingReceipt.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const Settings = ({}) => {
  const {t} = useTranslation();
  const {isStoreOnline} = useContext(StoreContext);
  const {updateOfflineSalesCount} = useContext(ReportsContext);
  const {isDarkMode} = useContext(ThemeContext);
  const navigation = useNavigation();
  const [visiblePrinterTest, setvisiblePrinterTest] = useState(false);
  const [sendingSales, setSendingSales] = useState(false);
  const styles = isDarkMode ? stylesDark : stylesLight;
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');

  const postSale = async sale => {
    const url = 'http://10.0.2.2:3000/sales';
    try {
      const response = await axios.post(url, sale);
      console.log('POST request successful:', response.data);
    } catch (error) {
      console.error('POST request failed:', error);
    }
  };

  const sendSalesFromStorage = async () => {
    if (isStoreOnline) {
      try {
        const sales = await AsyncStorage.getItem('offlineSales');
        if (sales) {
          const salesArray = JSON.parse(sales);
          setSendingSales(true);
          for (const sale of salesArray) {
            await postSale(sale); // Her satışı göndermeden önce bir süre bekle
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 saniye bekleme
          }
          // Clear offline sales from local storage and update the badge count
          AsyncStorage.removeItem('offlineSales');
          updateOfflineSalesCount();
          console.log(
            'Sales sent successfully from local storage:',
            salesArray,
          );
        } else {
          console.log('No offline sales found.');
        }
      } catch (error) {
        console.error('Error sending sales from local storage:', error);
      } finally {
        setSendingSales(false);
      }
    } else {
      console.log('Store is offline. Cannot send sales.');
    }
  };

  const htmlTemplate = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dummy Shopping Receipt</title>
  <style>
    .container {
      flex: 1;
      background-color: #DDDDDD;
      border-radius: 10px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
      border: 2px solid #000000;
      margin: 20px;
    }
    .company-info {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .address-info {
      flex: 0.8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     
    }
    .receipt-info {
      flex: 1;
      display: flex;
      flex-direction: row;
      border-bottom: 2px solid #67666c;
      border-bottom: 2px solid #67666c;
      margin-bottom : 300px;
    }
    .receipt-left, .receipt-right {
      flex: 1;
      padding: 15px;
    }
    .receipt-left {
      text-align: left;
    }
    .receipt-right {
      text-align: right;
    }
    .total-section {
      border-top: 1px solid #67666c;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 2px solid #67666c;
    }
    .barcode-section {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  </head>
  <body>
  <div class="container">
    <div class="company-info">
      <h1>32bit Bilgisayar Hizmetleri Ltd. Şti.</h1>
    </div>
    <div class="address-info">
      <p>Bağdat Cad. Kumbaracılar Sk. No:18</p>
      <p>+90 (216) 348 60 43</p>
      <p>İstanbul</p>
    </div>
    <div class="receipt-info">
      <div class="receipt-left">
        <p><strong>Tarih:</strong> XXX</p>
        <p><strong>Saat:</strong> XXX</p>
        <p><strong>Kasiyer Kodu:</strong> XXX</p>
      </div>
      <div class="receipt-right">
        <p><strong>Saat:</strong> XXX</p>
        <p><strong>Nakit Ödeme:</strong> XXXX ₺</p>
        <p><strong>Kredi Kartı Ödeme:</strong> XXXX ₺</p>
      </div>
    </div>
    <div class="total-section">
      <p><strong>Alınan Para</strong></p>
      <p>XXXX ₺</p>
    </div>
    <div class="total-section">
      <p><strong>Para Üstü</strong></p>
      <p>XXXX ₺</p>
    </div>
    <div class="total-section">
      <p><strong>Genel Toplam</strong></p>
      <p>XXXX ₺</p>
    </div>
  </div>
  </body>
  </html>
    `;

  const convertToPDF = async () => {
    try {
      const options = {
        html: htmlTemplate,
        fileName: 'cashRegisterReceipt',
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
    <SafeAreaView style={styles.screenContainer}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Image source={logoImageSource} style={{width: 400, height: 120}} />
      </View>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <SettingsOption title={'Deneme'} iconName={'reportsIcon'} />
          <SettingsOption title={'Deneme'} iconName={'reportsIcon'} />
          <SettingsSwitchOption
            title={t('dark-theme')}
            iconName={'darkThemeIcon'}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <SettingsOption
            title={t('other-settings')}
            iconName={'otherSettingsIcon'}
          />
          <SettingsOption
            title={t('printer-test')}
            iconName={'printerIcon'}
            onPress={() => {
              setvisiblePrinterTest(true);
            }}
          />
          <SettingsOption
            title={t('change-language')}
            iconName={'changeLanguageIcon'}
            onPress={() => navigation.navigate('changeLanguage')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <SendSalesButton onPress={sendSalesFromStorage} />
      </View>
      <Modal visible={visiblePrinterTest}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.8}}>
            <ReceiptButton
              title="Kapat"
              onPress={() => {
                setvisiblePrinterTest(false);
              }}
              color={'#2287da'}
              iconName={'closeIcon'}
            />
          </View>
          <View style={{flex: 1, padding: 20}}>
            <DummyShoppingReceipt />
          </View>
          <View style={{flex: 0.8, alignItems: 'flex-end'}}>
            <ReceiptButton
              title="Yazdir"
              onPress={convertToPDF} // Yazdırma işlemi
              color={'#2287da'}
              iconName={'printerIcon'}
            />
          </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={sendingSales}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Settings;
