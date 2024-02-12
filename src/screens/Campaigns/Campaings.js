import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import SalesHistoryList from '../../components/SalesHistoryList/SalesHistoryList.js';

const Campaigns = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const [campaigns, setCampaigns] = useState([]);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const fetchCampaigns = async () => {
    try {
      const url = 'http://10.0.2.2:3000/campaigns';
      const response = await axios.get(url);
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCampaigns();
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View></View>
      <View style={styles.screenInnerContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.title}>Kampanyalar</Text>
          <FlatList
            width="75%"
            data={campaigns}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  height: 100,
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
                    height: 100,
                    width: 100,
                  }}>
                  <Image
                    source={require('../../assets/images/campaignsImage.png')}
                    style={{width: 80, height: 80}}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  style={{
                    color: isDarkMode ? '#DDDDDD' : '#30475E',
                    fontSize: 24,
                    marginLeft: 20,
                  }}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Campaigns;
