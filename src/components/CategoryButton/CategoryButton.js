import React from 'react';
import {TouchableOpacity, View, Text, ImageBackground} from 'react-native';

const CategoryButton = ({title, backgroundImageSource, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 4,
        borderLeftWidth: 4,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#4D89B4',
        margin: 8,
      }}>
      <ImageBackground
        source={backgroundImageSource}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 80,
        }}>
        <View
          style={{
            backgroundColor: '#DDDDDD',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryButton;
