import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  lefSection: {
    flex: 1,
  },
  filterButtonsContainer: {
    backgroundColor: '#222831',
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    marginTop: 12,
  },
  leftListContainer: {
    backgroundColor: '#222831',
    flex: 8,
    padding: 5,
  },
  centerSection: {
    backgroundColor: '#505860',
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
    backgroundColor: '#222831',
    flex: 1,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: 8,
  },
  totalPrice: {
    backgroundColor: '#222831',
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
    color: 'white',
  },
  discountedTotalPrice: {
    backgroundColor: '#222831',
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
    color: 'white',
  },
  rightSection: {
    flex: 1,
  },
  cartButtonsSection: {
    flex: 1,
  },
  searchByNameButtonContainer: {
    backgroundColor: '#222831',
    flex: 1,
    padding: 12,
  },
  deleteButtonsContainer: {
    backgroundColor: '#222831',
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
    backgroundColor: '#222831',
    flex: 1,
    justifyContent: 'center',
  },
  cashierCodeText: {
    fontSize: scaleByWidth('1.9'),
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  dateContainer: {
    backgroundColor: '#222831',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: scaleByWidth('1.9'),
    fontWeight: 'bold',
    color: 'white',
  },
  storeStatusContainer: {
    backgroundColor: '#222831',
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

export default stylesDark;
