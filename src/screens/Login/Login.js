import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {Vibration} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import LoginInput from '../../components/LoginInput/LoginInput.js';
import LoginButton from '../../components/LoginButton/LoginButton.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
import axios from 'axios';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const Sound = require('react-native-sound');
const Login = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const {setUser, setIsLogedIn, isLogedIn} = useContext(UserContext);
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [version, setVersion] = useState('');
  const [users, setUsers] = useState([]);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [lastUser, setLastUser] = useState('');

  const styles = isDarkMode ? stylesDark : stylesLight;
  const logoImageSource = isDarkMode
    ? require('../../assets/images/32bit_logo_dark.png')
    : require('../../assets/images/32bitlogo.png');

  const playSound = () => {
    var whoosh = new Sound('wrong_entry.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

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

  const fetchLastUser = async () => {
    try {
      const url = 'http://10.0.2.2:3000/lastUser';
      const response = await axios.get(url);
      console.log(response.data);
      setLastUser(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchVersion();
      await fetchUsers();
      await fetchLastUser();
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (lastUser.userCode) {
      FingerprintScanner.authenticate({
        title: 'Fingerprint Authentication',
        description: 'Scan your fingerprint on the device scanner to continue.',
      })
        .then(() => {
          console.log('Fingerprint successfully authenticated');
          console.log('Last user:', lastUser);
          setUser(lastUser.userCode);
          setIsLogedIn(true);
          FingerprintScanner.release();
        })
        .catch(error => {
          FingerprintScanner.release();
          console.log('Fingerprint authentication failed:', error);
        });
    }
  }, [lastUser]);

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
      setIsLogedIn(true);
      console.log('Logged in user:', isLogedIn);
      postLastUser(loggedInUser.userCode);
      setUser(userCode);
    } else {
      setLoginErrorMessage(
        'Geçersiz kullanıcı kodu veya şifre. Lütfen tekrar deneyin.',
      );
      // Vibrate the phone (for 500 milliseconds) and play the sound
      playSound();
      Vibration.vibrate(500);
    }
  };

  const postLastUser = async userId => {
    const url = 'http://10.0.2.2:3000/lastUser';

    try {
      const response = await axios.put(url, {userCode: userId});
      console.log('Last user successfully updated:', response.data);
    } catch (error) {
      console.error('Failed to update last user:', error);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoImageSource} style={styles.image} />
        <Text style={styles.versionText}>{version}</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.welceomeText}>{t('welcome')}</Text>
            <Text style={styles.descriptionText}>
              {t('enter-username-password')}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <AppIcons name={'personIcon'} />

            <LoginInput
              placeholder={t('user-code')}
              keyboardType="numeric"
              onChange={handleUserCodeChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <AppIcons name={'lockIcon'} />
            <LoginInput
              placeholder={t('password')}
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
          <LoginButton title={t('login')} onPress={handleLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
