import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import AppIcons from '../AppIcons/AppIcons.js';

const Product = ({
  name,
  price,
  image,
  onPress,
  onPressFavorites,
  onPressRemoveFavorites,
  isFavorite,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.productContainer}
      activeOpacity={0.8}>
      {isFavorite ? (
        <TouchableOpacity
          onPress={onPressRemoveFavorites}
          style={styles.removeFavoriteButton}>
          <View style={styles.favoriteIcon}>
            <AppIcons name="removeFavoriteIcon" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPressFavorites}
          style={styles.addFavoriteButton}>
          <View style={styles.favoriteIcon}>
            <AppIcons name="addFavoriteIcon" />
          </View>
        </TouchableOpacity>
      )}
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

export default Product;
