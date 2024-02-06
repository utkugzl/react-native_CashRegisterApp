import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CartContext} from '../../contexts/CartContext.js';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import axios from 'axios';
import CartProduct from '../../components/CartProduct/CartProduct.js';
import CartButton from '../../components/CartButton/CartButton.js';
import PaymentKeyboard from '../../components/PaymnetKeyboard/PaymnetKeyboard.js';

const Payment = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [content, setContent] = useState('categories');
  const [selectedItem, setSelectedItem] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
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
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 1,
              flexDirection: 'row',
              padding: 18,
            }}>
            <CartButton title="E-Fatura" color={'#9c6417'} />
          </View>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 4,
              flexDirection: 'row',
              padding: 8,
            }}></View>
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
                123₺
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}>
            <View style={{backgroundColor: '#222831', flex: 1, padding: 8}}>
              <CartButton title="Belge Bitir" color={'#afad21'} />
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
          <PaymentKeyboard />
        </View>
      </View>
      <View style={{backgroundColor: 'blue', flex: 0.1}}></View>
    </SafeAreaView>
  );
};

export default Payment;
