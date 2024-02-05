import React from 'react';
import {Text} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import AppIcons from '../AppIcons/AppIcons';
import {TouchableOpacity} from 'react-native';

const ProductStackHeaderRight = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('sale')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
      }}>
      <AppIcons name={'cartIcon'} />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 12,
        }}>
        Sepete Git
      </Text>
    </TouchableOpacity>
  );
};

export default ProductStackHeaderRight;
