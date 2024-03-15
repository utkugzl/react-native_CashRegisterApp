import React from 'react';
import {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NotificaitonSwitch from '../../components/NotificationSwitch/NotificationSwitch.js';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import SettingsSwitchOption from '../../components/SettingsSwitchOption/SettingsSwitchOption.js';
import SendSalesButton from '../../components/SendSalesButton/SendSalesButton.js';
import ReceiptButton from '../../components/ReceiptButton/ReceiptButton.js';
import DummyShoppingReceipt from '../../components/DummyShoppingReceipt/DummyShoppingReceipt.js';

import htmlTemplate from './Components/HtmlTemplate.js';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Settings = ({}) => {
  const {t} = useTranslation();
  const {isStoreOnline} = useContext(StoreContext);
  const {offlineSalesCount, updateOfflineSalesCount} =
    useContext(ReportsContext);
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
      if (offlineSalesCount > 0) {
        try {
          const sales = await AsyncStorage.getItem('offlineSales');
          if (sales) {
            const salesArray = JSON.parse(sales);
            setSendingSales(true);
            for (const sale of salesArray) {
              await postSale(sale);
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
        Alert.alert('Gönderilecek çevrimdışı satış yok.');
      }
    } else {
      Alert.alert('Mağaza çevrimdışı olduğu için satış gönderilemiyor.');
    }
  };

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
      <View style={styles.imageContainer}>
        <Image source={logoImageSource} style={styles.image} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.optionsContainer}>
          <NotificaitonSwitch
            title={t('notifications')}
            iconName={'notificationsIcon'}
          />
          <SettingsSwitchOption
            title={t('dark-theme')}
            iconName={'darkThemeIcon'}
          />
        </View>
        <View style={styles.optionsContainer}>
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
      <View style={styles.footerContainer}>
        <SendSalesButton
          onPress={sendSalesFromStorage}
          title={t('send-sales')}
        />
      </View>
      <Modal visible={visiblePrinterTest} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCloseButtonContainer}>
            <ReceiptButton
              title={t('close')}
              onPress={() => {
                setvisiblePrinterTest(false);
              }}
              iconName={'closeIcon'}
            />
          </View>
          <View style={styles.modalReceiptContainer}>
            <DummyShoppingReceipt />
          </View>
          <View style={styles.modalPrintButtonContainer}>
            <ReceiptButton
              title={t('print')}
              onPress={convertToPDF}
              iconName={'printerIcon'}
            />
          </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={sendingSales}>
        <View style={styles.loadingModalContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Settings;
