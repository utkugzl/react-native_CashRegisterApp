import React from 'react';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../contexts/ThemeContext.js';
import Sale from '../screens/Sale/Sale.js';
import Payment from '../screens/Payment/Paymnet.js';
import ShoppingReceiptPrint from '../screens/ShoppingReceiptPrint/ShoppingReceiptPrint.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';

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
