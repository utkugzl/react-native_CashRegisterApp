import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    width: 200,
    height: 300,
    padding: 10,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 150, height: 130},
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d16440',
    marginTop: 8,
  },
  removeFavoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    margin: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#d44854',
  },
  addFavoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    margin: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#1ba32f',
  },
  favoriteIcon: {
    padding: 5,
  },
});

export default styles;
