import React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {Vibration} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import LoginInput from '../../components/LoginInput/LoginInput.js';
import LoginButton from '../../components/LoginButton/LoginButton.js';
import styles from './styles.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';

import axios from 'axios';

const Login = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [version, setVersion] = useState('');
  const [users, setUsers] = useState([]);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const fetchVersion = async () => {
    try {
      const url = 'http://10.0.2.2:3000/version';
      const response = await axios.get(url);
      setVersion(response.data.version);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const url = 'http://10.0.2.2:3000/users';
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchVersion();
      await fetchUsers();
    };

    fetchData();
  }, []);

  const handleUserCodeChange = enteredUserCode => {
    setUserCode(enteredUserCode);
  };

  const handlePasswordChange = enteredPassword => {
    setPassword(enteredPassword);
  };

  const handleLogin = () => {
    // Check if the entered user code and password match any user in the users array
    const loggedInUser = users.find(
      user => user.userCode === userCode && user.userPassword === password,
    );

    if (loggedInUser) {
      navigation.navigate('drawer');
    } else {
      setLoginErrorMessage('Invalid user code or password. Please try again.');
      // Vibrate the phone (for 500 milliseconds)
      //TODO add voice feedback
      Vibration.vibrate(500);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/32bitlogo.png')}
          style={styles.image}
        />
        <Text style={styles.versionText}>{version}</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.welceomeText}>Hoşgeldiniz!</Text>
            <Text style={styles.descriptionText}>
              Lütfen kullanıcı kodu ve şifrenizi giriniz
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <AppIcons name={'personIcon'} />

            <LoginInput
              placeholder="Kullaıcı Kodu"
              keyboardType="numeric"
              onChange={handleUserCodeChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <AppIcons name={'lockIcon'} />
            <LoginInput
              placeholder="Şifre"
              isSecure={isSecureEntry}
              onChange={handlePasswordChange}
            />
            <TouchableOpacity
              style={styles.showPasswordContainer}
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <AppIcons name={'showPasswordIcon'} />
            </TouchableOpacity>
          </View>
          {loginErrorMessage ? (
            <View style={styles.errorMessageContainer}>
              <AppIcons name={'alertIcon'} />
              <Text style={styles.errorMessageText}>{loginErrorMessage}</Text>
            </View>
          ) : null}
          <LoginButton title="Giriş Yap" onPress={handleLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
