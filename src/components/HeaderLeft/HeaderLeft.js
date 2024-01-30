import React from 'react';

import AppIcons from '../AppIcons/AppIcons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <AppIcons name={'menuIcon'} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
