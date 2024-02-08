import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import AppIcons from '../../components/AppIcons/AppIcons.js';
import useCategories from '../../hooks/UseCategories.js';
import CategoryButton from '../../components/CategoryButton/CategoryButton.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import SaleProduct from '../../components/SaleProduct/SaleProduct.js';
import CartButton from '../../components/CartButton/CartButton.js';
import Keyboard from '../../components/Keyboard/Keyboard.js';
import CampaignOption from '../../components/CampaignOption/CampaingOption.js';
import CartList from '../../components/CartList/CartList.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Sale = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useContext(ThemeContext);
  const {t} = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [content, setContent] = useState('categories');
  const [selectedItem, setSelectedItem] = useState(null);
  const {isStoreOnline} = useContext(StoreContext);
  const {user} = useContext(UserContext);

  const {
    cart,
    addToCart,
    totalPrice,
    discountedTotalPrice,
    currentDate,
    currentTime,
    setCart,
    setTotalPrice,
    setDiscountedTotalPrice,
    removeFromCart,
    setCampaignId,
    campaignId,
    calculateDiscount,
    setCampaignContext,
  } = useContext(CartContext);
  const storeStatusText = isStoreOnline
    ? t('store-online')
    : t('store-offline');
  const storeStatusIcon = isStoreOnline ? 'onlineIcon' : 'offlineIcon';

  const categories = useCategories();
  const styles = isDarkMode ? stylesDark : stylesLight;
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
      setCampaignId(0);
      setTotalPrice(0);
      setDiscountedTotalPrice(0);
      setCart([]);
      setSelectedItem(null);
    } else {
      Alert.alert('Uyarı', 'Sepetinizde ürün bulunmamaktadır.');
    }
  };

  const handleFilterButtonClick = filterType => {
    setContent(filterType);
  };

  const handleSelectedCampaign = campaignIds => {
    setCampaignContext(campaignIds);
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
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.sectionContainer}>
        <View style={styles.lefSection}>
          <View style={{backgroundColor: 'brown', flex: 1}}></View>
          <View style={styles.filterButtonsContainer}>
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
          <View style={styles.leftListContainer}>
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
                  renderItem={({item}) => (
                    <CampaignOption
                      title={item.title}
                      itemId={item.id}
                      isSelected={campaignId === item.id}
                      onPress={() => handleSelectedCampaign(item.id)}
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
        <View style={styles.centerSection}>
          <View style={styles.centerListContainer}>
            <CartList cart={cart} setSelectedItem={setSelectedItem} />
          </View>
          <View style={styles.totalPriceContainer}>
            <View style={styles.totalPrice}>
              <Text style={styles.totalPriceText}>Ara Toplam</Text>
              <Text style={styles.totalPriceText}>
                {totalPrice.toFixed(2)}₺
              </Text>
            </View>
            <View style={styles.discountedTotalPrice}>
              <Text style={styles.discountedPriceText}>Toplam Tutar</Text>
              <Text style={styles.discountedPriceText}>
                {discountedTotalPrice.toFixed(2)}₺
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.cartButtonsSection}>
            <View style={styles.searchByNameButtonContainer}>
              <CartButton
                title="İsimden Ara"
                color={'#275485'}
                onPress={() => {
                  navigation.navigate('products');
                }}
              />
            </View>
            <View style={styles.deleteButtonsContainer}>
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
      <View style={styles.bottomSection}>
        <View style={styles.cashierCodeContainer}>
          <Text style={styles.cashierCodeText}>Kasiyer Kodu : {user}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <View style={styles.storeStatusContainer}>
          <View style={styles.storeStatusIconContainer}>
            <View style={styles.icon}>
              <AppIcons name={storeStatusIcon} />
            </View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: isStoreOnline ? 'green' : 'red',
                marginRight: 16,
              }}>
              {storeStatusText}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sale;
