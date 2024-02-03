import {StyleSheet, Image} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    width: 200,
    height: 250,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E28F3D',
    marginTop: 8,
  },
});

export default styles;
