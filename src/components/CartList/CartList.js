import React from 'react';
import {useRef} from 'react';
import {FlatList} from 'react-native';
import CartProduct from '../CartProduct/CartProduct.js';

const CartList = ({cart, setSelectedItem}) => {
  const flatListRef = useRef(null);

  const handleAddItem = () => {
    // Her yeni öğe eklendiğinde scroll işlemi
    flatListRef.current.scrollToOffset({
      offset: 50 * cart.length,
      animated: true,
    });
  };

  return (
    <FlatList
      ref={flatListRef}
      style={{width: '100%', padding: 2, paddingHorizontal: 6}}
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
      onContentSizeChange={handleAddItem}
    />
  );
};

export default CartList;
