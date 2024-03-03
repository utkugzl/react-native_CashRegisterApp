import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  image: {
    width: scaleByWidth('30'),
    height: 120,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsSection: {
    flex: 3,
    flexDirection: 'row',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default stylesLight;
