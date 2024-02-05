import React from 'react';
import {useEffect, useState, useRef, useContext} from 'react';
import {CartContext} from '../../contexts/CartContext.js';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';

import CategoryButton from '../../components/CategoryButton/CategoryButton.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import SaleProduct from '../../components/SaleProduct/SaleProduct.js';
import CartProduct from '../../components/CartProduct/CartProduct.js';

const Sale = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [content, setContent] = useState('categories');
  const {cart, addToCart} = useContext(CartContext);

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

  const handleFilterButtonClick = filterType => {
    setContent(filterType);
  };

  const handleCategoryButtonClick = category => {
    setContent('filteredProducts');
    switch (category) {
      case 'Market':
        setFilteredProducts(
          products.filter(product => product.category === 'market'),
        );
        break;
      case 'Temizlik':
        setFilteredProducts(
          products.filter(product => product.category === 'cleaning'),
        );
        break;
      case 'Giyim':
        setFilteredProducts(
          products.filter(product => product.category === 'clothing'),
        );
        break;
      case 'Ev&Yaşam':
        setFilteredProducts(
          products.filter(product => product.category === 'home'),
        );
        break;
      case 'Kozmetik':
        setFilteredProducts(
          products.filter(product => product.category === 'cosmetic'),
        );
        break;
      default:
        setFilteredProducts(products);
        break;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}></View>
          <View
            style={{
              backgroundColor: 'orange',
              flex: 1,
              flexDirection: 'row',
            }}>
            <FilterButton
              title="Kategoriler"
              onPress={() => handleFilterButtonClick('categories')}
              selected={content === 'categories'}
            />
            <FilterButton
              title="ürünler"
              onPress={() => handleFilterButtonClick('products')}
              selected={content === 'products'}
            />
          </View>
          <View style={{backgroundColor: '#222831', flex: 8, padding: 5}}>
            {content === 'categories' && (
              <View style={{marginTop: 5}}>
                <ScrollView>
                  {categories.map((category, index) => (
                    <CategoryButton
                      key={index}
                      title={category.title}
                      backgroundImageSource={category.imageSource}
                      onPress={() => handleCategoryButtonClick(category.title)}
                    />
                  ))}
                </ScrollView>
              </View>
            )}
            {content === 'products' && (
              <View style={{alignItems: 'center', marginTop: 8}}>
                <FlatList
                  key={'_'}
                  numColumns={3}
                  data={products}
                  keyExtractor={item => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <SaleProduct
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      onPress={() => addToCart(item)}
                    />
                  )}
                />
              </View>
            )}
            {content === 'filteredProducts' && (
              <View style={{alignItems: 'center', marginTop: 8}}>
                <FlatList
                  key={'_'}
                  numColumns={3}
                  data={filteredProducts}
                  keyExtractor={item => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <SaleProduct
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      onPress={() => addToCart(item)}
                    />
                  )}
                />
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 1,
          }}>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4,
            }}>
            <FlatList
              style={{width: '100%'}}
              key={'_'}
              data={cart}
              keyExtractor={(item, index) => `${item.id}_${index}`}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <CartProduct name={item.name} price={item.price} />
              )}
            />
          </View>
          <View
            style={{
              backgroundColor: 'brown',
              flex: 0.8,
              borderWidth: 8,
              borderRadius: 16,
            }}>
            <View
              style={{
                backgroundColor: 'orange',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderBottomWidth: 4,
                borderTopStartRadius: 16,
                borderTopEndRadius: 16,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Ara Toplam
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                123
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'brown',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderBottomStartRadius: 16,
                borderBottomEndRadius: 16,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Toplam Tutar
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                123
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'purple', flex: 1}}></View>
      </View>
      <View style={{backgroundColor: 'blue', flex: 0.1}}></View>
    </SafeAreaView>
  );
};

export default Sale;
