import React from 'react';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reports from '../screens/Reports/Reports.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';
import {ThemeContext} from '../contexts/ThemeContext.js';
import {useTranslation} from 'react-i18next';

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
    </Stack.Navigator>
  );
};

export default ReportStack;
