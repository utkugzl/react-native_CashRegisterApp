import React from 'react';
import {useEffect, useState, useRef, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {CartContext} from '../../contexts/CartContext.js';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';

import CategoryButton from '../../components/CategoryButton/CategoryButton.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import SaleProduct from '../../components/SaleProduct/SaleProduct.js';
import CartProduct from '../../components/CartProduct/CartProduct.js';

const Sale = () => {
  const {t} = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [content, setContent] = useState('categories');
  const {cart, addToCart, totalPrice} = useContext(CartContext);
  const inputRef = useRef(null);
  const [input, setInput] = useState('0');
  const categories = [
    {
      title: t('market'),
      imageSource: require('../../assets/images/foodFilterImage.webp'),
    },
    {
      title: t('cleaning'),
      imageSource: require('../../assets/images/cleaningFilterImage.jpeg'),
    },
    {
      title: t('clothing'),
      imageSource: require('../../assets/images/clothingFilterImage.png'),
    },
    {
      title: t('home'),
      imageSource: require('../../assets/images/homeFilterImage.png'),
    },
    {
      title: t('cosmetics'),
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
              title={t('categories')}
              onPress={() => handleFilterButtonClick('categories')}
              selected={content === 'categories'}
            />
            <FilterButton
              title={t('products')}
              onPress={() => handleFilterButtonClick('products')}
              selected={content === 'all-products'}
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
                {totalPrice}₺
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
                123₺
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}></View>
          <View style={{backgroundColor: 'pink', flex: 0.5}}></View>
          <View
            style={{
              backgroundColor: 'orange',
              flex: 3,
              flexDirection: 'row',
            }}>
            <View style={{backgroundColor: 'brown', flex: 2}}>
              <View
                style={{
                  backgroundColor: '#475347',
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#504a45',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#d9740f',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#ded960',
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5fb974',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#d55822',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#e517a4',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#e3b587',
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#60636b',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#132148',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0f49ea',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#8da2dd',
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#97509b',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#bcd23e',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#289e8a',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#124d6a',
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#21069e',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#f43d0a',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#7d7692',
                    flex: 1,
                    borderWidth: 1,
                  }}></TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor: 'yellow', flex: 1}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4EB84E',
                  flex: 1,
                  borderWidth: 1,
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#9E9A56',
                  flex: 1,
                  borderWidth: 1,
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#642a9a',
                  flex: 2,
                  borderWidth: 1,
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#76295e',
                  flex: 1,
                  borderWidth: 1,
                }}></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'blue', flex: 0.1}}></View>
    </SafeAreaView>
  );
};

export default Sale;

/*
<TextInput ref={inputRef} value={input} />
            <Button
              title="Satış Yap"
              onPress={() => {
                console.log(inputRef.current.value);
                inputRef.current += '1';
                setInput(prev => {
                  return prev + '1';
                });
              }}
            />
 */
