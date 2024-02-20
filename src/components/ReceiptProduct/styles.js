import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productContainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 12,
    borderBottomWidth: 0.3,
  },
  topInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottomInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  barcodeContainer: {
    marginRight: 20,
  },
  barcode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
