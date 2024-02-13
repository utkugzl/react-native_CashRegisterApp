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
  },
  headerLeftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  headerLeftTextContainer: {
    marginLeft: 30,
  },
  text: {
    color: 'black',
    fontSize: scaleByWidth('2'),
    fontWeight: 'bold',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  headerRightTextContainer: {
    marginRight: 30,
  },
  listContainer: {
    flex: 4,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTopWidth: 2,
    borderColor: 'black',
  },
  totalText: {
    fontSize: scaleByWidth('2.6'),
    fontWeight: 'bold',
    marginRight: 20,
    color: '#DDDDDD',
  },
});

export default stylesLight;
