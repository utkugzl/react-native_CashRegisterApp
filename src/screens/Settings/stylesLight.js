import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import scaleByHeight from '../../utils/ScaleByHeight.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  image: {
    width: scaleByWidth('30'),
    height: scaleByHeight('12'),
  },
  bodyContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  footerContainer: {
    flex: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loadingModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  modalCloseButtonContainer: {
    flex: 0.8,
  },
  modalPrintButtonContainer: {
    flex: 0.8,
    alignItems: 'flex-end',
  },
  modalReceiptContainer: {
    flex: 1,
    padding: 20,
  },
});

export default stylesLight;
