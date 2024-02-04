import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {ThemeContext} from '../../contexts/ThemeContext.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import CategoryFilterButton from '../../components/CategoryFilterButton/CategoryFilterButton.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

import axios from 'axios';
import Product from '../../components/Product/Product.js';
import {t} from 'i18next';

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState('Tüm Ürünler');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryButtons, setShowCategoryButtons] = useState(false);
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
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

  const handleFilterPress = filter => {
    setIsLoading(true);
    setSelectedFilter(filter);
    setSelectedCategory(null);
    setShowCategoryButtons(filter === 'Tüm Ürünler' ? false : true);
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
          products.filter(product =>
            ['C', 'Ç', 'D'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'E-F':
        setFilteredProducts(
          products.filter(product =>
            ['E', 'F'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'G-I':
        setFilteredProducts(
          products.filter(product =>
            ['G', 'H', 'I', 'İ'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
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
          products.filter(product =>
            ['L', 'M', 'N'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
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
          products.filter(product =>
            ['R', 'S'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
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
          products.filter(product =>
            ['U', 'Ü', 'V', 'Y', 'Z'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
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
    switch (category.title) {
      case 'Market':
        setFilteredProducts(
          filteredProducts.filter(product => product.category === 'market'),
        );
        break;
      case 'Temizlik':
        setFilteredProducts(
          filteredProducts.filter(product => product.category === 'cleaning'),
        );
        break;
      case 'Giyim':
        setFilteredProducts(
          filteredProducts.filter(product => product.category === 'clothing'),
        );
        break;
      case 'Ev&Yaşam':
        setFilteredProducts(
          filteredProducts.filter(product => product.category === 'home'),
        );
        break;
      case 'Kozmetik':
        setFilteredProducts(
          filteredProducts.filter(product => product.category === 'cosmetic'),
        );
        break;
      default:
        setFilteredProducts(filteredProducts);
    }
    setShowCategoryButtons(false);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.filterButtonContainer}>
        {filters.map((filter, index) => (
          <FilterButton
            key={index}
            title={filter}
            onPress={() => handleFilterPress(filter)}
            selected={selectedFilter === filter}
          />
        ))}
      </View>
      <View style={styles.listContainer}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={isDarkMode ? '#DDDDDD' : '#47D047'}
            style={styles.activityIndicator}
          />
        ) : (
          <FlatList
            style={styles.list}
            data={filteredProducts}
            key={'_'}
            numColumns={5}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Product name={item.name} price={item.price} image={item.image} />
            )}
          />
        )}
      </View>
      {showCategoryButtons && (
        <View style={styles.categoryButtonContainer}>
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
      )}
    </SafeAreaView>
  );
};

export default Products;
