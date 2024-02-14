import React from 'react';
import {useContext} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {useTranslation} from 'react-i18next';
import AppIcons from '../AppIcons/AppIcons';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const ProductStackHeaderRight = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const {t} = useTranslation();
  const styles = isDarkMode ? stylesDark : stylesLight;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('sale')}
      style={styles.buttonContainer}>
      <AppIcons name={'cartIcon'} />
      <Text style={styles.text}>{t('go-to-cart')}</Text>
    </TouchableOpacity>
  );
};

export default ProductStackHeaderRight;
