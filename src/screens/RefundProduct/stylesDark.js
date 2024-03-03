import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  sectionsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSection: {
    backgroundColor: '#222831',
    flex: 1,
    padding: 16,
  },
  flex1: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: scaleByWidth('2.6'),
    fontWeight: 'bold',
    color: 'white',
  },
  refundListContainer: {
    flex: 2,
    backgroundColor: '#b1b1b1',
    borderWidth: 1,
  },
  rightSection: {
    backgroundColor: '#505860',
    borderWidth: 1,
    flex: 2,
  },
  cartListContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  totalPriceText: {
    fontSize: scaleByWidth('1.6'),
    fontWeight: 'bold',
    color: 'white',
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
  reasonModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  reasonModal: {
    backgroundColor: 'white',
    width: '50%',
    height: '60%',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 2,
  },
  reasonModalTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  reasonModalTitle: {
    fontSize: scaleByWidth('3'),
    fontWeight: 'bold',
    color: 'black',
  },
  reasonModalListContainer: {
    flex: 4,
  },
  reasonModalButtonContainer: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
  },
});

export default stylesDark;
