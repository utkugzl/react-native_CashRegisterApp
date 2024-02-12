import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import UserList from '../../components/UserList/UserList.js';
import axios from 'axios';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Users = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const fetchUsers = async () => {
    try {
      const url = 'http://10.0.2.2:3000/users';
      const response = await axios.get(url);
      setUsers(response.data);
      console.log('response.data:', response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers();
    };

    fetchData();
  }, []);

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
        <UserList users={users} />
      </View>
    </SafeAreaView>
  );
};

export default Users;
