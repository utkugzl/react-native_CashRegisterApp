import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Settings from '../screens/Settings/Settings.js';
import Deneme from '../screens/Deneme/Deneme.js';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft.js';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settingsMenu"
        component={Settings}
        options={{
          title: 'Settings',
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="deneme"
        component={Deneme}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
