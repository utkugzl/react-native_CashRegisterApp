import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
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
  Alert,
} from 'react-native';
import axios from 'axios';
import CategoryButton from '../../components/CategoryButton/CategoryButton.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import SaleProduct from '../../components/SaleProduct/SaleProduct.js';
import CartProduct from '../../components/CartProduct/CartProduct.js';
import CartButton from '../../components/CartButton/CartButton.js';
import Keyboard from '../../components/Keyboard/Keyboard.js';

const Sale = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [content, setContent] = useState('categories');
  const [selectedItem, setSelectedItem] = useState(null);
  const {user} = useContext(UserContext);
  const {cart, addToCart, totalPrice, setCart, setTotalPrice, removeFromCart} =
    useContext(CartContext);
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

  const fetchCampaigns = async () => {
    try {
      const url = 'http://10.0.2.2:3000/campaigns';
      const response = await axios.get(url);
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
      await fetchCampaigns();
    };

    fetchData();
  }, []);

  const handleRowCancel = () => {
    if (selectedItem) {
      removeFromCart(selectedItem);
      setSelectedItem(null);
    } else {
      Alert.alert('Uyarı', 'Lütfen bir ürün seçin.');
    }
  };

  const handleDocumentCancel = () => {
    if (cart.length > 0) {
      setTotalPrice(0);
      setCart([]);
      setSelectedItem(null);
    } else {
      Alert.alert('Uyarı', 'Sepetinizde ürün bulunmamaktadır.');
    }
  };

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
    <SafeAreaView style={{backgroundColor: '#222831', flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}></View>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 1,
              flexDirection: 'row',
              padding: 8,
            }}>
            <FilterButton
              title={t('categories')}
              onPress={() => handleFilterButtonClick('categories')}
              selected={content === 'categories'}
            />
            <FilterButton
              title={t('products')}
              onPress={() => handleFilterButtonClick('products')}
              selected={content === 'products'}
            />
            <FilterButton
              title={t('campaigns')}
              onPress={() => handleFilterButtonClick('campaigns')}
              selected={content === 'campaigns'}
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
            {content === 'campaigns' && (
              <View style={{alignItems: 'center', marginTop: 8}}>
                <FlatList
                  key={'_'}
                  data={campaigns}
                  keyExtractor={item => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => <Text>{item.title}</Text>}
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
            backgroundColor: '#505860',
            borderWidth: 1,
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
              style={{width: '100%', padding: 8}}
              key={'_'}
              data={cart}
              keyExtractor={(item, index) => `${item.id}_${index}`}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <CartProduct
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onPress={() => {
                    setSelectedItem(item);
                  }}
                />
              )}
            />
          </View>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 0.8,
              borderWidth: 8,
              borderRadius: 16,
            }}>
            <View
              style={{
                backgroundColor: '#222831',
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
                backgroundColor: '#222831',
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
                0₺
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}>
            <View style={{backgroundColor: '#222831', flex: 1, padding: 8}}>
              <CartButton
                title="İsimden Ara"
                color={'#275485'}
                onPress={() => {
                  navigation.navigate('products');
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#222831',
                flex: 1,
                flexDirection: 'row',
                padding: 8,
              }}>
              <CartButton
                title="Satır İptal"
                onPress={handleRowCancel}
                color={'#862727'}
              />
              <CartButton
                title="Belge İptal"
                onPress={handleDocumentCancel}
                color={'#862727'}
              />
            </View>
          </View>
          <Keyboard />
        </View>
      </View>
      <View style={{flex: 0.08, flexDirection: 'row', borderWidth: 2}}>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 16,
            }}>
            Kasiyer Kodu : {user}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Tarih
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginRight: 16,
            }}>
            Server Durumu
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sale;
