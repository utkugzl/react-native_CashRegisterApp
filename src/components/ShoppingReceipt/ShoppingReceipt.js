import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import ReceiptProduct from '../ReceiptProduct/ReceiptProduct.js';

const ShoppingReceipt = ({
  date,
  time,
  cashierCode,
  cash,
  creditCard,
  cashBack,
  total,
  cart,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        elevation: 50,
        borderWidth: 2,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'auto',
          }}>
          32bit Bilgisayar Hizmetleri Ltd. Şti.
        </Text>
      </View>
      <View style={{flex: 0.8}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'auto',
            }}>
            Bağdat Cad. Kumbaracılar Sk. No:18
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'auto',
            }}>
            +90 (216) 348 60 43
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'auto',
            }}>
            İstanbul
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderColor: '#67666c',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Tarih : {date}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Saat : {time}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Kasiyer Kodu : {cashierCode}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            paddingRight: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Saat : 1234
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Nakit Ödeme : {cash.toFixed(2)}₺
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Kredi Kartı Ödeme : {creditCard.toFixed(2)}₺
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          borderBottomWidth: 2,
          borderColor: '#67666c',
          backgroundColor: 'white',
        }}>
        <FlatList
          style={{width: '100%'}}
          key={'_'}
          data={cart}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ReceiptProduct
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 2,
          borderColor: '#67666c',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Alınan Para
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            {(cash + creditCard).toFixed(2)}₺
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Para Üstü
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            {cashBack.toFixed(2)}₺
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.6,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
            paddingBottom: 2,
          }}>
          Genel Toplam
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
            paddingBottom: 2,
          }}>
          {total.toFixed(2)}₺
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/barcode.png')}
          style={{width: 250, height: 200, alignSelf: 'center', opacity: 0.6}}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default ShoppingReceipt;
