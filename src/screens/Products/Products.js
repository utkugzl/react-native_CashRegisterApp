import React from 'react';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import FilterButton from '../../components/FilterButton/FilterButton.js';
import CategoryFilterButton from '../../components/CategoryFilterButton/CategoryFilterButton.js';

import styles from './styles.js';
import axios from 'axios';

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState('Tüm Ürünler');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filters = [
    'Tüm Ürünler',
    'Favoriler',
    'A',
    'B',
    'C-D',
    'E-F',
    'G-I',
    'K',
    'L-N',
    'P',
    'R-S',
    'T',
    'Ü-Z',
  ];

  const categories = [
    {
      title: 'Market',
      imageSource: require('../../assets/images/foodFilterImage.webp'),
    },
    {
      title: 'Temizlik',
      imageSource: require('../../assets/images/cleaningFilterImage.jpeg'),
    },
    {
      title: 'Giyim',
      imageSource: require('../../assets/images/clothingFilterImage.png'),
    },
    {
      title: 'Ev&Yaşam',
      imageSource: require('../../assets/images/homeFilterImage.png'),
    },
    {
      title: 'Kozmetik',
      imageSource: require('../../assets/images/cosmeticFilterImage.jpeg'),
    },
  ];

  const fetchProducts = async () => {
    try {
      const url = 'http://10.0.2.2:3000/products';
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  const handleFilterPress = filter => {
    setIsLoading(true);
    setSelectedFilter(filter);
    switch (filter) {
      case 'Tüm Ürünler':
        setFilteredProducts(products);
        break;
      case 'Favoriler':
        break;
      case 'A':
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('A'),
          ),
        );
        break;
      case 'B':
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('B'),
          ),
        );
        break;
      case 'C-D':
        setFilteredProducts(
          products.filter(
            product =>
              product.name.toUpperCase().toUpperCase().startsWith('C') ||
              product.name.toUpperCase().toUpperCase().startsWith('D'),
          ),
        );
        break;
      case 'E-F':
        setFilteredProducts(
          products.filter(
            product =>
              product.name.toUpperCase().toUpperCase().startsWith('E') ||
              product.name.toUpperCase().toUpperCase().startsWith('F'),
          ),
        );
        break;
      case 'G-I':
        setFilteredProducts(
          products.filter(
            product =>
              product.name.toUpperCase().toUpperCase().startsWith('G') ||
              product.name.toUpperCase().toUpperCase().startsWith('H') ||
              product.name.toUpperCase().toUpperCase().startsWith('İ') ||
              product.name.toUpperCase().toUpperCase().startsWith('I'),
          ),
        );
        break;
      case 'K':
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('K'),
          ),
        );
        break;
      case 'L-N':
        setFilteredProducts(
          products.filter(
            product =>
              product.name.toUpperCase().toUpperCase().startsWith('L') ||
              product.name.toUpperCase().toUpperCase().startsWith('M') ||
              product.name.toUpperCase().toUpperCase().startsWith('N'),
          ),
        );
        break;
      case 'P':
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('P'),
          ),
        );
        break;
      case 'R-S':
        setFilteredProducts(
          products.filter(
            product =>
              product.name.toUpperCase().toUpperCase().startsWith('R') ||
              product.name.toUpperCase().toUpperCase().startsWith('S'),
          ),
        );
        break;
      case 'T':
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('T'),
          ),
        );
        break;
      case 'Ü-Z':
        setFilteredProducts(
          products.filter(
            product =>
              product.name.toUpperCase().toUpperCase().startsWith('U') ||
              product.name.toUpperCase().toUpperCase().startsWith('Ü') ||
              product.name.toUpperCase().toUpperCase().startsWith('V') ||
              product.name.toUpperCase().toUpperCase().startsWith('W') ||
              product.name.toUpperCase().toUpperCase().startsWith('X') ||
              product.name.toUpperCase().toUpperCase().startsWith('Y') ||
              product.name.toUpperCase().toUpperCase().startsWith('Z'),
          ),
        );
        break;
      default:
        setFilteredProducts(
          products.filter(product => product.name.startsWith(filter)),
        );
    }

    setIsLoading(false);
  };

  const handleCategoryPress = category => {
    setSelectedCategory(category.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.5, flexDirection: 'row', marginTop: 8}}>
        {filters.map((filter, index) => (
          <FilterButton
            key={index}
            title={filter}
            onPress={() => handleFilterPress(filter)}
            selected={selectedFilter === filter}
          />
        ))}
      </View>
      <View style={{backgroundColor: 'yellow', flex: 6}}>
        {isLoading ? (
          // Display the activity indicator while loading
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          />
        ) : (
          // Render your products based on the filteredProducts array
          <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />
        )}
      </View>
      <View style={{flex: 0.7, flexDirection: 'row'}}>
        {categories.map((category, index) => (
          <CategoryFilterButton
            key={index}
            title={category.title}
            backgroundImageSource={category.imageSource}
            onPress={() => handleCategoryPress(category)}
            selected={selectedCategory === category.title}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Products;
