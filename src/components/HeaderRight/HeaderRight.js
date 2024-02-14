import React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import {useNavigation} from '@react-navigation/native';
import AppIcons from '../AppIcons/AppIcons';
import {TouchableOpacity} from 'react-native';

const HeaderRight = () => {
  const navigation = useNavigation();
  const {offlineSalesCount} = useContext(ReportsContext);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('settingsScreen');
      }}>
      <View style={styles.container}>
        <AppIcons name={'settingsIcon'} />
        {offlineSalesCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{offlineSalesCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -5,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HeaderRight;
