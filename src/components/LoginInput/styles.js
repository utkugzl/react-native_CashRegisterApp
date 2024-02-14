import {StyleSheet} from 'react-native';
import scaleByHeight from '../../utils/ScaleByHeight.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  inputContainer: {
    width: scaleByWidth('35'),
    height: scaleByHeight('6'),
    margin: 10,
    padding: 15,
    borderLeftWidth: 1,
  },
});

export default styles;
