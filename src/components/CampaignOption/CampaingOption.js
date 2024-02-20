import React from 'react';
import {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const CampaignOption = ({title, itemId, onPress, isSelected}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  const campaignImageMap = {
    1: require('../../assets/images/twenty-percent-discount.png'),
    2: require('../../assets/images/forty-percent-discount.png'),
  };

  const getImageSource = () => {
    return campaignImageMap[itemId];
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
      activeOpacity={0.9}>
      <View style={[styles.titleContainer, {borderWidth: isSelected ? 6 : 1}]}>
        <Text style={styles.text}>{title}</Text>
      </View>

      <Image
        source={getImageSource()}
        style={[styles.image, {borderWidth: isSelected ? 6 : 1}]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default CampaignOption;
