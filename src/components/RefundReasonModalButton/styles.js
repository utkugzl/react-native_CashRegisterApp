import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    width: scaleByWidth('15'),
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scaleByWidth('1.8'),
  },
});

export default styles;
