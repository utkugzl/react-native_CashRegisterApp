import React from 'react';
import {View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const AppIcons = ({name}) => {
  let iconElement;

  switch (name) {
    case 'dashboardIcon':
      iconElement = <Ionicon name="podium" size={30} color="black" />;
      break;
    case 'salesIcon':
      iconElement = <Ionicon name="cart" size={30} color="black" />;
      break;
    case 'productsIcon':
      iconElement = <Ionicon name="apps" size={30} color="black" />;
      break;
    case 'reportsIcon':
      iconElement = <Ionicon name="document" size={30} color="black" />;
      break;
    case 'settingsIcon':
      iconElement = <Ionicon name="settings" size={30} color="black" />;
      break;
    default:
      iconElement = <Ionicon name="podium" size={30} color="black" />;
  }

  return <View>{iconElement}</View>;
};

export default AppIcons;
