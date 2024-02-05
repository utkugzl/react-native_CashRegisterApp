import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesDark = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#30475E',
  },
  headerContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB2B8',
  },
  image: {
    width: 250,
    height: 100,
  },
  cashiderCodeContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
    padding: 5,
  },
  cashiersCodeText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#DDDDDD',
  },
  bodyContainer: {
    flex: 4,
    marginTop: 15,
  },
  labelStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 4,
    color: '#DDDDDD',
  },
  logoutStyle: {
    marginBottom: 20,
  },
  footerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c98484',
  },
});

export default stylesDark;
