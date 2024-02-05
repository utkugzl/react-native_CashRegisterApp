import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles.js';

const SaleProduct = ({name, price, image, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.productContainer}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}₺</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SaleProduct;
