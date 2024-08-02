import React from 'react';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../contexts/ThemeContext.js';
import Sale from '../screens/Sale/Sale.js';
import Payment from '../screens/Payment/Paymnet.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';
import {TouchableOpacity} from 'react-native';
import AppIcons from '../components/AppIcons/AppIcons.js';

const Stack = createNativeStackNavigator();

const SaleStack = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="saleScereen"
        component={Sale}
        options={{
          title: t('sale'),
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // const { status } = await BarCodeScanner.requestPermissionsAsync();
                // setHasPermission(status === 'granted');
                // setScanned(true);
                // setData(data);
              }}
              activeOpacity={0.3}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
              }}>
              <AppIcons name="qr" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: isDarkMode ? '#DDDDDD' : '#30475E',
          },
          headerStyle: {
            backgroundColor: isDarkMode ? '#30475E' : '#f2f2f2',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="payment"
        component={Payment}
        options={{
          title: t('sale'),
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: isDarkMode ? '#DDDDDD' : '#30475E',
          },
          headerStyle: {
            backgroundColor: isDarkMode ? '#30475E' : '#f2f2f2',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default SaleStack;
