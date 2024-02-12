import React from 'react';
import {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext.js';
import {ReportsContext} from '../contexts/ReportsContext.js';
import 'react-native-gesture-handler';
import AuthStack from './AuthStack.js';
import AppStack from './AppStack.js';
import notifee from '@notifee/react-native';

const AppContainer = () => {
  const {isLogedIn, isNotificationOn} = useContext(UserContext);
  const {offlineSalesCount} = useContext(ReportsContext);

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Yeni Satışlarınız Var!',
      body: `${offlineSalesCount} adet gönderilmeyen satışınız var.`,
      android: {
        channelId,
        // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  console.log(typeof isNotificationOn);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('interval çalıştı');
      if (offlineSalesCount > 0 && isNotificationOn) {
        console.log('asdasasdasda');
        onDisplayNotification();
      }
    }, 10000); // 10 saniye (10000 milisaniye)

    return () => clearInterval(intervalId);
  }, [offlineSalesCount, isNotificationOn]);

  return (
    <NavigationContainer>
      {isLogedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppContainer;
