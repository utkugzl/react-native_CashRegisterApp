import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const styles = StyleSheet.create({
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
  },
  bodyContainer: {
    flex: 4,
    marginTop: 15,
  },
  labelStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
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
  },
});

export default styles;
