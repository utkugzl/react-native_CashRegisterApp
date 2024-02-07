import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {CartContext} from '../../contexts/CartContext.js';
import {UserContext} from '../../contexts/UserContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import AppIcons from '../../components/AppIcons/AppIcons.js';
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
import CartProduct from '../../components/CartProduct/CartProduct.js';
import CartButton from '../../components/CartButton/CartButton.js';
import PaymentKeyboard from '../../components/PaymnetKeyboard/PaymnetKeyboard.js';

const Payment = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
    cashPayment,
    creditCardPayment,
    cashBack,
    setCashBack,
  } = useContext(CartContext);
  const storeStatusText = isStoreOnline ? 'Store Online' : 'Store Offline';
  const storeStatusIcon = isStoreOnline ? 'onlineIcon' : 'offlineIcon';

  const [isDocumentFinishDisabled, setIsDocumentFinishDisabled] =
    useState(true);
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
    const newIsDocumentFinishDisabled =
      discountedTotalPrice > cashPayment + creditCardPayment;

    setIsDocumentFinishDisabled(newIsDocumentFinishDisabled);
  }, [discountedTotalPrice, cashPayment, creditCardPayment]);

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

  const handlePayment = () => {
    setCashBack(
      cashPayment + creditCardPayment - discountedTotalPrice > 0
        ? cashPayment + creditCardPayment - discountedTotalPrice
        : 0,
    );
    console.log(cashBack);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#222831', flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <View
            style={{
              backgroundColor: '#222831',
              flex: 1,
              flexDirection: 'row',
              padding: 18,
            }}>
            <CartButton
              title="E-Fatura"
              color={'#9c6417'}
              onPress={() => console.log('E-Fatura')}
            />
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
                {discountedTotalPrice.toFixed(2)}₺
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'brown', flex: 1}}>
            <View style={{backgroundColor: '#222831', flex: 1, padding: 8}}>
              <CartButton
                title="Belge Bitir"
                color={'#afad21'}
                disabled={isDocumentFinishDisabled}
                onPress={() => handlePayment()}
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
          <PaymentKeyboard />
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
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            {currentDate} Cash-{cashPayment} Cre-{creditCardPayment} --{' '}
            {discountedTotalPrice}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#222831',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{margin: 5}}>
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

export default Payment;
