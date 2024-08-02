import React from 'react';
import {View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const AppIcons = ({name}) => {
  let iconElement;

  switch (name) {
    case 'qr':
      iconElement = <Ionicon name="qr-code-outline" size={35} color="black" />;
      break;
    case 'personIcon':
      iconElement = <Ionicon name="person" size={30} color="black" />;
      break;
    case 'lockIcon':
      iconElement = <Ionicon name="key" size={30} color="black" />;
      break;
    case 'showPasswordIcon':
      iconElement = <Ionicon name="eye" size={30} color="black" />;
      break;
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
    case 'alertIcon':
      iconElement = <Ionicon name="warning" size={35} color="#e11a1a" />;
      break;
    case 'rightArrowIcon':
      iconElement = <Ionicon name="arrow-forward" size={30} color="black" />;
      break;
    case 'darkThemeIcon':
      iconElement = <Ionicon name="moon" size={35} color="black" />;
      break;
    case 'refundProductIcon':
      iconElement = <Ionicon name="repeat" size={35} color="black" />;
      break;
    case 'printerIcon':
      iconElement = <Ionicon name="print" size={35} color="black" />;
      break;
    case 'mailIcon':
      iconElement = <Ionicon name="mail" size={35} color="black" />;
      break;
    case 'changeLanguageIcon':
      iconElement = <Ionicon name="globe" size={35} color="black" />;
      break;
    case 'addFavoriteIcon':
      iconElement = <Ionicon name="heart" size={33} color="#d53232" />;
      break;
    case 'removeFavoriteIcon':
      iconElement = (
        <Ionicon name="close-circle-outline" size={30} color="black" />
      );
      break;
    case 'cartIcon':
      iconElement = <Ionicon name="cart" size={35} color="black" />;
      break;
    case 'backspaceIcon':
      iconElement = <Ionicon name="backspace" size={35} color="white" />;
      break;
    case 'deleteAllIcon':
      iconElement = <Ionicon name="close" size={45} color="black" />;
      break;
    case 'closeIcon':
      iconElement = <Ionicon name="close" size={40} color="black" />;
      break;
    case 'checkmarkIcon':
      iconElement = <Ionicon name="checkmark-circle" size={40} color="black" />;
      break;
    case 'notificationsIcon':
      iconElement = <Ionicon name="notifications" size={35} color="black" />;
      break;
    case 'pastSaleIcon':
      iconElement = <Ionicon name="archive" size={30} color="black" />;
      break;
    case 'campaignsIcon':
      iconElement = <Ionicon name="medical" size={30} color="black" />;
      break;
    case 'refundReasonIcon':
      iconElement = <Ionicon name="play" size={20} color="black" />;
      break;
    default:
      iconElement = <Ionicon name="remove" size={35} color="black" />;
  }

  return <View>{iconElement}</View>;
};

export default AppIcons;
