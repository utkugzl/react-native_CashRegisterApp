import React from 'react';
import {View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const AppIcons = ({name}) => {
  let iconElement;

  switch (name) {
    case 'menuIcon':
      iconElement = <Ionicon name="menu" size={35} color="black" />;
      break;
    case 'dashboardIcon':
      iconElement = <Ionicon name="podium" size={35} color="black" />;
      break;
    case 'saleIcon':
      iconElement = <Ionicon name="cart" size={35} color="black" />;
      break;
    case 'productsIcon':
      iconElement = <Ionicon name="apps" size={35} color="black" />;
      break;
    case 'reportsIcon':
      iconElement = <Ionicon name="document" size={35} color="black" />;
      break;
    case 'settingsIcon':
      iconElement = <Ionicon name="settings" size={35} color="black" />;
      break;
    case 'logoutIcon':
      iconElement = <Ionicon name="log-out" size={35} color="black" />;
      break;
    case 'onlineIcon':
      iconElement = <Ionicon name="radio-button-on" size={30} color="green" />;
      break;
    case 'offlineIcon':
      iconElement = <Ionicon name="radio-button-on" size={30} color="red" />;
      break;
    case 'rightArrowIcon':
      iconElement = <Ionicon name="arrow-forward" size={30} color="black" />;
      break;
    case 'otherSettingsIcon':
      iconElement = <Ionicon name="repeat" size={35} color="black" />;
      break;
    case 'printerIcon':
      iconElement = <Ionicon name="print" size={35} color="black" />;
      break;
    default:
      iconElement = <Ionicon name="remove" size={35} color="black" />;
  }

  return <View>{iconElement}</View>;
};

export default AppIcons;
