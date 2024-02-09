import React from 'react';
import {TouchableOpacity, View, Text, ImageBackground} from 'react-native';

const CategoryFilterButton = ({
  title,
  backgroundImageSource,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        flex: 1,
        borderWidth: selected ? 8 : 3,
        borderColor: '#000000',
      }}>
      <ImageBackground
        source={backgroundImageSource}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#555555',
            padding: 8,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryFilterButton;
