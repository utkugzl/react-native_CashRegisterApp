import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#ccd226',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
    margin: 2,
    marginBottom: 2,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  barcode: {
    fontSize: 12,
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
