import React from 'react';
import {useContext, useState} from 'react';
import {SafeAreaView, View, Image, Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useNavigation} from '@react-navigation/native';
import SettingsOption from '../../components/SettingsOption/SettingsOption.js';
import SettingsSwitchOption from '../../components/SettingsSwitchOption/SettingsSwitchOption.js';
import SendSalesButton from '../../components/SendSalesButton/SendSalesButton.js';
import ReceiptButton from '../../components/ReceiptButton/ReceiptButton.js';
import DummyShoppingReceipt from '../../components/DummyShoppingReceipt/DummyShoppingReceipt.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Settings = ({}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const navigation = useNavigation();
  const [visiblePrinterTest, setvisiblePrinterTest] = useState(false);
  const styles = isDarkMode ? stylesDark : stylesLight;
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');
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
          backgroundColor: '#222831',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <SendSalesButton />
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

export default Settings;
