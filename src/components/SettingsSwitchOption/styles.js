import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: 'yellow',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: 'purple',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTextContainer: {
    backgroundColor: 'green',
    width: scaleByWidth('30'),
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 15,
    paddingLeft: 20,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;
