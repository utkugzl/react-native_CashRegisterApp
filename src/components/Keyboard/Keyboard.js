import React from 'react';
import {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import AppIcons from '../AppIcons/AppIcons.js';
import {useNavigation} from '@react-navigation/native';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Keyboard = ({cart, products, addToCart}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  const [textInputValue, setTextInputValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigation = useNavigation();
  const handleKeyPress = value => {
    setTextInputValue(prevValue => prevValue + value);
  };

  const handleBackspace = () => {
    setTextInputValue(prevValue => prevValue.slice(0, -1));
  };

  const handleQuantityEntry = () => {
    setQuantity(textInputValue);
    setTextInputValue('');
  };

  const handleBarcodeEntry = () => {
    const enteredBarcode = textInputValue.trim();

    const foundProduct = products.find(
      product => product.barcode === enteredBarcode,
    );

    if (foundProduct) {
      if (quantity !== '' && parseInt(quantity) !== 0) {
        addToCart(foundProduct, parseInt(quantity));
        setQuantity('');
      } else {
        addToCart(foundProduct);
      }
      setTextInputValue('');
    } else {
      console.log('Ürün bulunamadı');
    }
  };

  return (
    <View style={{flex: 3}}>
      <View style={styles.inputContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 8,
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#DDDDDD',
                width: 60,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                marginRight: 2,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {quantity !== '' ? quantity : '-'}
              </Text>
            </View>
            <TextInput
              value={textInputValue}
              style={{
                backgroundColor: 'white',
                width: '75%',
                borderWidth: 1,
                borderRadius: 8,
                padding: 14,
                marginRight: 4,
                fontSize: 26,
              }}
              showSoftInputOnFocus={false}
              placeholder="- - - - - -"
              placeholderTextColor="#888"
              keyboardType="default"
              onChangeText={text => {
                // Text input değiştiğinde yapılacak işlemler buraya yazılabilir
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setTextInputValue('');
                setQuantity('');
              }}>
              <AppIcons name="deleteAllIcon" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
        }}>
        <View style={styles.keyBoardContainer}>
          <View style={styles.keyBoardTopContainer}>
            <TouchableOpacity
              onPress={() => handleKeyPress('00')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleBackspace}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 2,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppIcons name="backspaceIcon" />
            </TouchableOpacity>
          </View>
          <View style={styles.numbersContainer}>
            <TouchableOpacity
              onPress={() => handleKeyPress('7')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('8')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('9')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numbersContainer}>
            <TouchableOpacity
              onPress={() => handleKeyPress('4')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('5')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('6')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numbersContainer}>
            <TouchableOpacity
              onPress={() => handleKeyPress('1')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('2')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('3')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numbersContainer}>
            <TouchableOpacity
              onPress={() => handleKeyPress('0')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 2,
                borderWidth: 1,
                borderRadius: 16,
                marginHorizontal: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleKeyPress('.')}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#0B5269',
                flex: 1,
                borderWidth: 1,
                borderRadius: 16,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 52}}>.</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.keyboardRightContainer}>
          <TouchableOpacity
            onPress={handleQuantityEntry}
            activeOpacity={0.6}
            style={{
              backgroundColor: '#bb9d32',
              flex: 1,
              borderWidth: 1,
              borderRadius: 16,
              marginBottom: 4,
              marginHorizontal: 2,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Miktar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (cart.length === 0) {
                Alert.alert('Sepetiniz Boş');
              } else {
                navigation.navigate('payment');
              }
            }}
            activeOpacity={0.6}
            style={{
              backgroundColor: '#319331',
              flex: 2,
              borderWidth: 1,
              borderRadius: 16,
              marginBottom: 6,
              marginHorizontal: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Ödeme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleBarcodeEntry}
            activeOpacity={0.6}
            style={{
              backgroundColor: '#0B5269',
              flex: 1,
              borderWidth: 1,
              borderRadius: 16,
              marginBottom: 4,
              marginHorizontal: 2,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Giriş
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Keyboard;
