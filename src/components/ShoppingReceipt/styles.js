import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  receiptContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    elevation: 50,
    borderWidth: 2,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'auto',
  },
  contact: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'auto',
  },
  receiptDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#67666c',
    alignItems: 'center',
  },
  receiptDetailLeftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  receiptDetailRightSection: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  receiptInfoText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingBottom: 2,
  },
  cartListContainer: {
    flex: 4,
    borderBottomWidth: 2,
    borderColor: '#67666c',
    backgroundColor: 'white',
  },
  priceInfoSection: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#67666c',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  totalPriceContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  barcodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeImage: {
    width: 250,
    height: 200,
    alignSelf: 'center',
    opacity: 0.6,
  },
});

export default styles;
