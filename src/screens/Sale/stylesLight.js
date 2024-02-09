import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  lefSection: {
    flex: 1,
  },
  filterButtonsContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    marginTop: 12,
  },
  leftListContainer: {
    backgroundColor: '#DDDDDD',
    flex: 8,
    padding: 5,
  },
  centerSection: {
    backgroundColor: 'white',
    borderWidth: 1,
    flex: 1,
  },
  centerListContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  totalPriceContainer: {
    backgroundColor: '#DDDDDD',
    flex: 0.8,
    borderWidth: 4,
    borderRadius: 16,
  },
  totalPrice: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 4,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  totalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  discountedTotalPrice: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  discountedPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  rightSection: {
    flex: 1,
  },
  cartButtonsSection: {
    flex: 1,
  },
  searchByNameButtonContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    padding: 12,
  },
  deleteButtonsContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  bottomSection: {
    flex: 0.08,
    flexDirection: 'row',
    borderWidth: 2,
  },
  cashierCodeContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    justifyContent: 'center',
  },
  cashierCodeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 16,
  },
  dateContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
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
  icon: {
    margin: 5,
  },
});

export default stylesLight;
