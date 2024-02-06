import React from 'react';
import {useContext} from 'react';
import {View, Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import AppIcons from '../AppIcons/AppIcons.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const DrawerMenuContent = props => {
  const {isDarkMode} = useContext(ThemeContext);
  const {user} = useContext(UserContext);
  const {t} = useTranslation();
  const {state} = props;
  const styles = isDarkMode ? stylesDark : stylesLight;
  const menuItems = [
    {label: t('dashboard'), routeName: 'dashboard'},
    {label: t('sale'), routeName: 'sale'},
    {label: t('products'), routeName: 'products'},
    {label: t('reports'), routeName: 'reports'},
    {label: t('settings'), routeName: 'settings'},
  ];
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');

  return (
    <View style={styles.menuContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={logoImageSource}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cashiderCodeContainer}>
        <Text style={styles.cashiersCodeText}>Cashier Code: {user} </Text>
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
                backgroundColor:
                  state.index === index
                    ? isDarkMode
                      ? '#276774'
                      : '#d1cfcf'
                    : 'transparent',
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
