import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import styles from './styles.js';

const Sale = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <View style={{backgroundColor: 'blue', flex: 4, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}></View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'yellow',
              width: 200,
              height: 200,
              padding: 10,
              borderRadius: 15,
              flexDirection: 'column',
            }}>
            <View
              style={{
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Urun Fiyati</Text>
              <Text>Urun Adi</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'purple', flex: 1}}></View>
      </View>
      <View style={{backgroundColor: 'blue', flex: 0.5}}></View>
    </SafeAreaView>
  );
};

export default Sale;
