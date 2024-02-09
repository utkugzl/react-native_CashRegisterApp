import React from 'react';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../contexts/ThemeContext.js';

import Reports from '../screens/Reports/Reports.js';
import SaleHistory from '../screens/SaleHistory/SaleHistory.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';
import HeaderRight from '../components/HeaderRight/HeaderRight.js';

const Stack = createNativeStackNavigator();

const ReportStack = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="reportsMenu"
        component={Reports}
        options={{
          title: t('reports'),
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
        name="saleHistory"
        component={SaleHistory}
        options={{
          title: 'Sale History',
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

export default ReportStack;
