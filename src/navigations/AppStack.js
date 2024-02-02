import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard/Dashboard.js';
import Products from '../screens/Products/Products.js';
import Reports from '../screens/Reports/Reports.js';
import SettingStack from './SettingStack.js';
import SaleStack from './SaleStack.js';
import ProductStack from './ProductStack.js';
import {useTranslation} from 'react-i18next';
import DrawerMenuContent from '../components/DrawerMenuContent/DrawerMenuContent.js';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const {t} = useTranslation();
  return (
    <Drawer.Navigator
      name="drawer"
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerMenuContent {...props} />}>
      <Drawer.Screen
        name="products"
        component={ProductStack}
        options={{
          title: t('products'),
        }}
      />
      <Drawer.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          title: t('dashboard'),
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="sale"
        component={SaleStack}
        options={{
          title: t('sale'),
        }}
      />
      <Drawer.Screen
        name="reports"
        component={Reports}
        options={{
          title: t('reports'),
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="settings"
        component={SettingStack}
        options={{
          title: t('settings'),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
