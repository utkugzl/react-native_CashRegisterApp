import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screenInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    marginTop: 15,
  },
});

export default stylesLight;
