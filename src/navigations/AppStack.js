import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard/Dashboard.js';
import Sale from '../screens/Sale/Sale.js';
import Products from '../screens/Products/Products.js';
import Reports from '../screens/Reports/Reports.js';
import Settings from '../screens/Settings/Settings';

import AppIcons from '../components/AppIcons/AppIcons.js';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => <AppIcons name={'dashboardIcon'} />,
          title: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="sale"
        component={Sale}
        options={{
          drawerIcon: () => <AppIcons name={'salesIcon'} />,
          title: 'Sale',
        }}
      />
      <Drawer.Screen
        name="products"
        component={Products}
        options={{
          drawerIcon: () => <AppIcons name={'productsIcon'} />,
          title: 'Products',
        }}
      />
      <Drawer.Screen
        name="reports"
        component={Reports}
        options={{
          drawerIcon: () => <AppIcons name={'reportsIcon'} />,
          title: 'Reports',
        }}
      />
      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{
          drawerIcon: () => <AppIcons name={'settingsIcon'} />,
          title: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
