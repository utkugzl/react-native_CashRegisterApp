import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

const RefundedProductList = ({
  refundItems,
  handleRemoveRefundItem,
  addToCart,
}) => {
  return (
    <FlatList
      style={{width: '100%', padding: 6}}
      key={'_'}
      data={refundItems}
      keyExtractor={(item, index) => `${item.id}_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            handleRemoveRefundItem(index);
            addToCart(item);
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: '#efb43e',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            borderWidth: 1,
            borderRadius: 8,
            margin: 2,
            marginBottom: 2,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.name} {item.quantity > 1 ? `x${item.quantity}` : ''}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.barcode}
            </Text>
          </View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {item.price}₺
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default RefundedProductList;
