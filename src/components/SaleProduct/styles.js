import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    width: scaleByWidth('9'),
    height: 170,
    padding: 4,
    borderRadius: 15,
    margin: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 80,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: scaleByWidth('1.5'),
    fontWeight: 'bold',
    color: '#d16440',
    marginTop: 4,
  },
});

export default styles;
