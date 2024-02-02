import React from 'react';
import {SafeAreaView, View} from 'react-native';

import FilterButton from '../../components/FilterButton/FilterButton.js';

import styles from './styles.js';

const Products = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          marginTop: 8,
        }}>
        <FilterButton title="Favoriler" />
        <FilterButton title="Tüm Ürünler" />
        <FilterButton title="A" />
        <FilterButton title="B" />
        <FilterButton title="C-D" />
        <FilterButton title="E-F" />
        <FilterButton title="G-I" />
        <FilterButton title="K" />
        <FilterButton title="P" />
        <FilterButton title="R-S" />
        <FilterButton title="T" />
        <FilterButton title="Ü-Z" />
      </View>
      <View style={{backgroundColor: 'green', flex: 6}}></View>
    </SafeAreaView>
  );
};

export default Products;
