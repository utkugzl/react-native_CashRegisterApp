import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login/Login.js';
import Dashboard from '../screens/Dashboard/Dashboard.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
