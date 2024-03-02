import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#DDDDDD',
  },
  text: {
    color: '#DDDDDD',
    fontSize: scaleByWidth('2.5'),
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#222831',
  },
  footerContainer: {
    flex: 0.6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#DDDDDD',
  },
  totalText: {
    fontSize: scaleByWidth('2.6'),
    fontWeight: 'bold',
    marginRight: 20,
    color: '#DDDDDD',
  },
});

export default stylesDark;
