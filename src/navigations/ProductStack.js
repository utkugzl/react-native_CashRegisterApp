import React from 'react';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../contexts/ThemeContext.js';
import Products from '../screens/Products/Products.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';
import ProductStackHeaderRight from '../components/ProductStackHeaderRight/ProductStackHeaderRight.js';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="productScreen"
        component={Products}
        options={{
          title: t('products'),
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <ProductStackHeaderRight />,
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

export default ProductStack;
