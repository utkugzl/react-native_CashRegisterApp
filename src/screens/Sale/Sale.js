import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles.js';

const Sale = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <View style={{backgroundColor: 'blue', flex: 4, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}></View>
        <View style={{backgroundColor: 'green', flex: 1}}></View>
        <View style={{backgroundColor: 'purple', flex: 1}}></View>
      </View>
      <View style={{backgroundColor: 'blue', flex: 0.5}}></View>
    </SafeAreaView>
  );
};

export default Sale;
