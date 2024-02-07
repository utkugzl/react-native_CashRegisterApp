import React from 'react';
import {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';
import styles from './styles.js';
import AppIcons from '../AppIcons/AppIcons.js';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CampaignOption = ({title, itemId, onPress, isSelected}) => {
  const {isDarkMode} = useContext(ThemeContext);

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
      style={{
        flexDirection: 'row-reverse',
        alignItems: 'center',
        margin: 10,
        marginBottom: 20,
      }}
      activeOpacity={0.9}>
      <View
        style={{
          backgroundColor: '#0B5269',
          width: scaleByWidth('25'),
          height: 70,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          paddingRight: 15,
          paddingLeft: 35,
          borderWidth: isSelected ? 6 : 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#DDDDDD',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>

      <Image
        source={getImageSource()}
        style={{
          width: scaleByWidth('7'),
          height: scaleByWidth('8'),
          borderRadius: 25,
          borderWidth: isSelected ? 8 : 3,
          borderColor: '#071519',
          backgroundColor: '#0B5269',
          marginRight: -20,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default CampaignOption;
