import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  sectionsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 1,
  },
  leftButtonContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    padding: 18,
  },
  leftBottomContainer: {
    backgroundColor: '#DDDDDD',
    flex: 4,
    flexDirection: 'row',
    padding: 8,
  },
  centerContainer: {
    backgroundColor: '#c0c2c3',
    borderWidth: 1,
    flex: 1,
  },
  listContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  priceContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: 8,
  },
  totalPriceContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  discountedTotalPriceContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  priceText: {
    fontSize: scaleByWidth('1.5'),
    fontWeight: 'bold',
    color: 'black',
  },
  rightContainer: {
    flex: 1,
  },
  finishSaleButtonContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    padding: 8,
  },
  deleteButtonsContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  footerContainer: {
    flex: 0.08,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  cashierCodeContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    justifyContent: 'center',
  },
  cashierCodeText: {
    fontSize: scaleByWidth('1.9'),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 16,
  },
  currentDateContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentDateText: {
    fontSize: scaleByWidth('1.9'),
    fontWeight: 'bold',
    color: 'black',
  },
  storeStatusContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  storeStatusIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    margin: 5,
  },
  storeStatusText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 16,
  },
  receiptModalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  receiptModalLeft: {
    flex: 0.8,
  },
  receiptModalCenter: {
    flex: 1,
    padding: 20,
  },
  receiptModalRight: {
    flex: 0.8,
    alignItems: 'flex-end',
  },
  emailModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  emailModalContainer: {
    backgroundColor: 'white',
    height: 200,
    width: 400,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    borderWidth: 2,
  },
  emailInputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  emailInput: {
    width: '100%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
  },
  emailButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  flex2: {
    flex: 2,
  },
});

export default stylesLight;
