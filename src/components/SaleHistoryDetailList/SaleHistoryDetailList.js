import React from 'react';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native';

const SaleHistoryDetailList = ({sale}) => {
  return (
    <FlatList
      style={{marginTop: 15}}
      data={sale.cart}
      width="70%"
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View
          style={{
            height: 100,
            width: '95%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            borderWidth: 1,
            borderRadius: 12,
            marginBottom: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: item.image}}
              style={{width: 80, height: 80}}
              resizeMode="contain"
            />
            <View style={{justifyContent: 'center', marginLeft: 25}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                {item.name} {item.quantity > 1 ? `x${item.quantity}` : ''}
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                {item.barcode}
              </Text>
            </View>
          </View>
          <View></View>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            {(item.price * item.quantity).toFixed(2)} ₺
          </Text>
        </View>
      )}
    />
  );
};

export default SaleHistoryDetailList;
