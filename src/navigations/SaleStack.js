import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import Sale from '../screens/Sale/Sale.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';

const Stack = createNativeStackNavigator();

const SaleStack = () => {
  const {t} = useTranslation();
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
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default SaleStack;
