import React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';

import LoginInput from '../../components/LoginInput/LoginInput.js';
import LoginButton from '../../components/LoginButton/LoginButton.js';
import styles from './styles.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

import axios from 'axios';

const Login = () => {
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [version, setVersion] = useState('');

  const fetchVersion = async () => {
    try {
      const url = 'http://10.0.2.2:3000/version';
      const response = await axios.get(url);
      setVersion(response.data.version);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchVersion();
    };

    fetchData();
  }, []);

  const handleUserCodeChange = enteredUserCode => {
    setUserCode(enteredUserCode);
    console.log('User Code:', enteredUserCode);
  };

  const handlePasswordChange = enteredPassword => {
    setPassword(enteredPassword);
    console.log('Password:', enteredPassword);
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
            <Image
              source={require('../../assets/images/personIcon.png')}
              style={{height: scaleByHeight('3'), width: scaleByWidth('2')}}
            />
            <LoginInput
              placeholder="Kullaıcı Kodu"
              keyboardType="numeric"
              onChange={handleUserCodeChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/images/lockIcon.png')}
              style={{
                height: scaleByHeight('4'),
                width: scaleByWidth('2'),
              }}
            />
            <LoginInput
              placeholder="Şifre"
              isSecure={isSecureEntry}
              onChange={handlePasswordChange}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Image
                source={require('../../assets/images/showPasswordIcon.png')}
                style={styles.showPasswordContainer}
              />
            </TouchableOpacity>
          </View>
          <LoginButton
            title="Giriş Yap"
            onPress={() => {
              console.log('Button Clicked!!');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
