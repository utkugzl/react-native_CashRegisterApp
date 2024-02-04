import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesDark = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#0B5269',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  optionTextContainer: {
    backgroundColor: '#0B5269',
    width: scaleByWidth('30'),
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 15,
    paddingLeft: 25,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#DDDDDD',
  },
});

export default stylesDark;
