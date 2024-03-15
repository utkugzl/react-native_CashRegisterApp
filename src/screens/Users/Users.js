import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import UserList from '../../components/UserList/UserList.js';
import useFetch from '../../hooks/useFetch.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Users = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  const {data: users, loading} = useFetch('http://10.0.2.2:3000/users');

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            color: isDarkMode ? '#DDDDDD' : '#30475E',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Users
        </Text>
      </View>
      <View style={styles.userListContainer}>
        {loading ? <Text>Loading...</Text> : <UserList users={users} />}
      </View>
    </SafeAreaView>
  );
};

export default Users;
