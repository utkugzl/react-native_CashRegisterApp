import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesDark = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: '#0B5269',
    width: scaleByWidth('25'),
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 15,
    paddingLeft: 35,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DDDDDD',
    textAlign: 'center',
  },
  image: {
    width: scaleByWidth('7'),
    height: scaleByWidth('8'),
    borderRadius: 25,
    borderColor: '#071519',
    backgroundColor: '#0B5269',
    marginRight: -20,
  },
});

export default stylesDark;
