import React from 'react';
import {FlatList} from 'react-native';
import CartProduct from '../CartProduct/CartProduct.js';

const CartList = ({cart, setSelectedItem}) => {
  return (
    <FlatList
      style={{width: '100%', padding: 8}}
      key={'_'}
      data={cart}
      keyExtractor={(item, index) => `${item.id}_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <CartProduct
          name={item.name}
          barcode={item.barcode}
          price={item.price}
          quantity={item.quantity}
          onPress={() => {
            setSelectedItem(item);
          }}
        />
      )}
    />
  );
};

export default CartList;
