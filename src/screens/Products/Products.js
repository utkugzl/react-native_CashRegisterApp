import React from 'react';
import {useState, useContext} from 'react';
import {SafeAreaView, View, ActivityIndicator, FlatList} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import useCategories from '../../hooks/UseCategories.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import CategoryFilterButton from '../../components/CategoryFilterButton/CategoryFilterButton.js';
import useFetch from '../../hooks/useFetch.js';
import Product from '../../components/Product/Product.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState('Tüm Ürünler');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryButtons, setShowCategoryButtons] = useState(false);
  const {isDarkMode} = useContext(ThemeContext);
  const {addToCart} = useContext(CartContext);
  const {addToFavorites, userFavorites, removeFromFavorites} =
    useContext(UserContext);
  const categories = useCategories();
  const [isFavorite, setIsFavorite] = useState(false);
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
  const {data: products, loading} = useFetch('http://10.0.2.2:3000/products');

  const handleFilterPress = filter => {
    setIsLoading(true);
    setSelectedFilter(filter);
    setSelectedCategory(null);
    setShowCategoryButtons(filter === 'Tüm Ürünler' ? false : true);
    switch (filter) {
      case 'Tüm Ürünler':
        setIsFavorite(false);
        setFilteredProducts(products);
        break;
      case 'Favoriler':
        setIsFavorite(true);
        setFilteredProducts(userFavorites);
        break;
      case 'A':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('A'),
          ),
        );
        break;
      case 'B':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('B'),
          ),
        );
        break;
      case 'C-D':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            ['C', 'Ç', 'D'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'E-F':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            ['E', 'F'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'G-I':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            ['G', 'H', 'I', 'İ'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'K':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('K'),
          ),
        );
        break;
      case 'L-N':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            ['L', 'M', 'N'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'P':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('P'),
          ),
        );
        break;
      case 'R-S':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            ['R', 'S'].some(letter =>
              product.name.toUpperCase().startsWith(letter),
            ),
          ),
        );
        break;
      case 'T':
        setIsFavorite(false);
        setFilteredProducts(
          products.filter(product =>
            product.name.toUpperCase().toUpperCase().startsWith('T'),
          ),
        );
        break;
      case 'Ü-Z':
        setIsFavorite(false);
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
            color={isDarkMode ? '#DDDDDD' : '#377481'}
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
              <Product
                barcode={item.barcode}
                name={item.name}
                price={item.price}
                image={item.image}
                isFavorite={isFavorite}
                onPress={() => addToCart(item)}
                onPressFavorites={() => addToFavorites(item)}
                onPressRemoveFavorites={() => {
                  removeFromFavorites(item);
                  setFilteredProducts(
                    filteredProducts.filter(product => product.id !== item.id),
                  );
                }}
              />
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
