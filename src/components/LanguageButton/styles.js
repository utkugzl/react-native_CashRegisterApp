import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    width: 400,
    height: 250,
    borderWidth: 2,
    overflow: 'hidden',
    borderRadius: 20,
    elevation: 40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  flagImage: {
    width: 500,
    height: 450,
    position: 'absolute',
    top: -100,
    left: -50,
    opacity: 0.7,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2CECE',
    position: 'absolute',
    top: 100,
    left: 50,
    width: 300,
    height: 50,
    borderRadius: 10,
    opacity: 0.8,
  },
  textStyle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
