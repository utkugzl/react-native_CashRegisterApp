import React from 'react';
import {useContext} from 'react';
import {FlatList, View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import AppIcons from '../AppIcons/AppIcons.js';

const UserList = ({users}) => {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <FlatList
      width="50%"
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 80,
            justifyContent: 'flex-start',
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
              marginRight: 20,
            }}>
            <AppIcons name="personIcon" />
          </View>
          <Text
            style={{
              color: isDarkMode ? '#DDDDDD' : '#30475E',
              fontSize: 24,
            }}>
            User Code : {item.userCode}
          </Text>
        </View>
      )}
    />
  );
};

export default UserList;
