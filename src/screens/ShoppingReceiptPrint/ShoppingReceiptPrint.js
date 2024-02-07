import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ShoppingReceipt from '../../components/ShoppingReceipt/ShoppingReceipt.js';

const ShoppingReceiptPrint = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'green', flexDirection: 'row'}}>
      <View style={{flex: 0.8, backgroundColor: 'orange'}}></View>
      <View style={{flex: 1, backgroundColor: 'green', padding: 25}}>
        <ShoppingReceipt />
      </View>
      <View style={{flex: 0.8, backgroundColor: 'brown'}}></View>
    </SafeAreaView>
  );
};

export default ShoppingReceiptPrint;
