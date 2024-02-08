import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesLight = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: 'white',
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
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: scaleByWidth('7'),
    height: scaleByWidth('8'),
    borderRadius: 25,
    borderColor: '#071519',
    backgroundColor: 'white',
    marginRight: -20,
  },
});

export default stylesLight;
