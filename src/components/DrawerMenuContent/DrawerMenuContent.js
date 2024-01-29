import React from 'react';
import {View, Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AppIcons from '../AppIcons/AppIcons.js';

import styles from './styles.js';

const DrawerMenuContent = props => {
  const {state} = props;

  const menuItems = [
    {label: 'Dashboard', routeName: 'dashboard'},
    {label: 'Sale', routeName: 'sale'},
    {label: 'Products', routeName: 'products'},
    {label: 'Reports', routeName: 'reports'},
    {label: 'Settings', routeName: 'settings'},
  ];
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/32bitlogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cashiderCodeContainer}>
        <Text style={styles.cashiersCodeText}>Cashier Code: </Text>
      </View>
      <View style={styles.bodyContainer}>
        <DrawerContentScrollView>
          {menuItems.map((item, index) => (
            <DrawerItem
              key={index}
              label={item.label}
              onPress={() => props.navigation.navigate(item.routeName)}
              icon={() => <AppIcons name={`${item.routeName}Icon`} />}
              labelStyle={styles.labelStyle}
              style={{
                backgroundColor: state.index === index ? '#BBB2B8' : 'white',
              }}
            />
          ))}
        </DrawerContentScrollView>
      </View>
      <View>
        <DrawerItem
          label={'Logout'}
          icon={() => <AppIcons name={'logoutIcon'} />}
          labelStyle={styles.labelStyle}
          style={styles.logoutStyle}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={{margin: 5}}>
          <AppIcons name={'offlineIcon'} />
        </View>
        <Text style={styles.storeStatusText}>Store Offline</Text>
      </View>
    </View>
  );
};

export default DrawerMenuContent;
