import React from 'react';
import {FlatList} from 'react-native';
import SaleProduct from '../SaleProduct/SaleProduct.js';

const SaleProductsList = ({products, addToCart}) => {
  return (
    <FlatList
      key={'_'}
      numColumns={3}
      data={products}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <SaleProduct
          name={item.name}
          price={item.price}
          image={item.image}
          onPress={() => addToCart(item)}
        />
      )}
    />
  );
};

export default SaleProductsList;
