import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const scaleByWidth = percentage => {
  return width * (parseFloat(percentage) / 100);
};

export default scaleByWidth;
