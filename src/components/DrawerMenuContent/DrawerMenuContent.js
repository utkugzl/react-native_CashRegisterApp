import React from 'react';
import {View, Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AppIcons from '../AppIcons/AppIcons.js';
import {useTranslation} from 'react-i18next';
import styles from './styles.js';

const DrawerMenuContent = props => {
  const {t} = useTranslation();
  const {state} = props;
  const menuItems = [
    {label: t('dashboard'), routeName: 'dashboard'},
    {label: t('sale'), routeName: 'sale'},
    {label: t('products'), routeName: 'products'},
    {label: t('reports'), routeName: 'reports'},
    {label: t('settings'), routeName: 'settings'},
  ];
  return (
    <View style={styles.menuContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/32bitlogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cashiderCodeContainer}>
        <Text style={styles.cashiersCodeText}>Cashier Code: 123123 </Text>
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
          label={t('logout')}
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
