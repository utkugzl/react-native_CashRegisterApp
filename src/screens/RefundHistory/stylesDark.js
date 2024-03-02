import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screenInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
  },
});

export default stylesDark;
