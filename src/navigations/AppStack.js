import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard/Dashboard.js';
import Sale from '../screens/Sale/Sale.js';
import Products from '../screens/Products/Products.js';
import Reports from '../screens/Reports/Reports.js';
import Settings from '../screens/Settings/Settings';

import DrawerMenuContent from '../components/DrawerMenuContent/DrawerMenuContent.js';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerMenuContent {...props} />}>
      <Drawer.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="sale"
        component={Sale}
        options={{
          title: 'Sale',
        }}
      />
      <Drawer.Screen
        name="products"
        component={Products}
        options={{
          title: 'Products',
        }}
      />
      <Drawer.Screen
        name="reports"
        component={Reports}
        options={{
          title: 'Reports',
        }}
      />
      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
