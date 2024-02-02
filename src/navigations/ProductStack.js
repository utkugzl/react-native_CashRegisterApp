import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import Products from '../screens/Products/Products.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="productScreen"
        component={Products}
        options={{
          title: t('products'),
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

export default ProductStack;
