import React from 'react';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';

const SalesHistoryList = ({sales}) => {
  const navigation = useNavigation();
  const {isDarkMode} = useContext(ThemeContext);

  return (
    <FlatList
      width="75%"
      data={sales}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('saleHistoryDetail', {sale: item});
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 80,
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: isDarkMode ? '#30475E' : '#f2f2f2',
              margin: 8,
              borderRadius: 10,
              borderWidth: 1,
            }}>
            <View
              style={{
                borderWidth: 5,
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                width: 80,
              }}>
              <Image
                source={require('../../assets/images/saleHistoryImage.png')}
                style={{width: 60, height: 60}}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: isDarkMode ? '#DDDDDD' : '#30475E',
                  fontSize: 24,
                }}>
                {item.date}
              </Text>
              <View style={{marginLeft: 20}}></View>
              <Text
                style={{
                  color: isDarkMode ? '#DDDDDD' : '#30475E',
                  fontSize: 24,
                }}>
                {item.time}
              </Text>
            </View>
            <View style={{marginRight: 25}}>
              <Text
                style={{
                  color: isDarkMode ? '#DDDDDD' : '#30475E',
                  fontSize: 24,
                }}>
                {item.total} ₺
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default SalesHistoryList;
