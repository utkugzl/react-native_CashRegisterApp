import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import AppIcons from '../AppIcons/AppIcons.js';
import {useNavigation} from '@react-navigation/native';
const Keyboard = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const navigation = useNavigation();
  const handleKeyPress = value => {
    setTextInputValue(prevValue => prevValue + value);
  };

  const handleBackspace = () => {
    setTextInputValue(prevValue => prevValue.slice(0, -1));
  };

  return (
    <View style={{flex: 3}}>
      <View style={{backgroundColor: '#222831', flex: 0.5}}>
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
            <TextInput
              value={textInputValue}
              style={{
                backgroundColor: 'white',
                width: '85%',
                borderWidth: 1,
                borderRadius: 8,
                padding: 14,
                marginRight: 4,
              }}
              showSoftInputOnFocus={false}
              placeholder="- - - - - -"
              placeholderTextColor="#888"
              keyboardType="default"
              onChangeText={text => {
                // Text input değiştiğinde yapılacak işlemler buraya yazılabilir
              }}
            />
            <TouchableOpacity onPress={() => setTextInputValue('')}>
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
        <View style={{backgroundColor: '#222831', flex: 2, padding: 4}}>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 1,
              flexDirection: 'row',
            }}>
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
          <View
            style={{
              backgroundColor: '#222831', //--------
              flex: 1,
              flexDirection: 'row',
              padding: 4,
            }}>
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
          <View
            style={{
              backgroundColor: '#222831', //--------
              flex: 1,
              flexDirection: 'row',
              padding: 4,
            }}>
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
          <View
            style={{
              backgroundColor: '#222831', //--------
              flex: 1,
              flexDirection: 'row',
              padding: 4,
            }}>
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
          <View
            style={{
              backgroundColor: '#222831', //--------
              flex: 1,
              flexDirection: 'row',
              padding: 4,
            }}>
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
        <View
          style={{
            backgroundColor: '#222831', //--------
            flex: 1,
            padding: 4,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: '#9E9A56',
              flex: 1,
              borderWidth: 1,
              borderRadius: 16,
              marginBottom: 4,
              marginHorizontal: 2,
            }}></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: '#642a9a',
              flex: 2,
              borderWidth: 1,
              borderRadius: 16,
              marginBottom: 6,
              marginHorizontal: 2,
            }}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('payment');
            }}
            activeOpacity={0.6}
            style={{
              backgroundColor: '#76295e',
              flex: 1,
              borderWidth: 1,
              borderRadius: 16,
              marginBottom: 4,
              marginHorizontal: 2,
            }}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Keyboard;
