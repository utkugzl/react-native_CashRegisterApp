import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    fontSize: scaleByWidth('2.5'),
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
  },
  footerContainer: {
    flex: 0.6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: 'black',
  },
  totalText: {
    fontSize: scaleByWidth('2.6'),
    fontWeight: 'bold',
    marginRight: 20,
    color: 'black',
  },
});

export default stylesLight;
