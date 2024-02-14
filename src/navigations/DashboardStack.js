import React from 'react';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {ThemeContext} from '../contexts/ThemeContext.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';
import Dashboard from '../screens/Dashboard/Dashboard.js';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboardMenu"
        component={Dashboard}
        options={{
          title: t('dashboard'),
          headerShown: true,
          headerTitle: '',
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

export default DashboardStack;
