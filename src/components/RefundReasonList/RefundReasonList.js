import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import AppIcons from '../AppIcons/AppIcons';

import styles from './styles.js';

const RefundReasonList = ({selectedReason, setSelectedReason}) => {
  const refundReasons = [
    'Son Kullanma Tarihi Geçmiş Ürün',
    'Ürün Arızalı',
    'Hasarlı Ambalaj',
    'Yanlış Ürün',
    'Fiyat Farkı',
    'Diğer',
  ];

  const handleItemClick = item => {
    console.log('item', item);
    setSelectedReason(item);
  };

  return (
    <FlatList
      data={refundReasons}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleItemClick(item)}
          style={{
            backgroundColor: selectedReason === item ? '#c2bcbc' : 'white',
            alignItems: 'center',
            paddingLeft: 12,
            padding: 8,
            flexDirection: 'row',
          }}>
          <AppIcons name="refundReasonIcon" />
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 6,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default RefundReasonList;
