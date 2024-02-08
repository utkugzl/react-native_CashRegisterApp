import React from 'react';

import {View, Text, Image} from 'react-native';

const ShoppingReceipt = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#c0afaf',
        borderRadius: 10,
        elevation: 50,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#c38c8c',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'auto',
          }}>
          32bit Bilgisayar Hizmetleri Ltd. Şti.
        </Text>
      </View>
      <View style={{flex: 1.1, backgroundColor: '#c4ca70'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#82836e',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'auto',
            }}>
            Bağdat Cad. Kumbaracılar Sk. No:18
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#6ac2df',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'auto',
            }}>
            +90 (216) 348 60 43
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f0cd63',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'auto',
            }}>
            İstanbul
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.2,
          backgroundColor: '#7197a5',
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderColor: '#67666c',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#cbab74',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Tarih : 1234
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Saat : 1234
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Kasiyer Kodu : 1234
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#b7eede',
            alignItems: 'flex-end',
            paddingRight: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Saat : 1234
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Kredi Karti : 1234
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Nakit : 1234
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: '#9f68aa',
          borderBottomWidth: 2,
          borderColor: '#67666c',
        }}></View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fb7962',
          borderBottomWidth: 2,
          borderColor: '#67666c',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#7db75e',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Alınan Para
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            1234
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#e8a74b',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            Para Üstü
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
              paddingBottom: 2,
            }}>
            1234
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.6,
          backgroundColor: '#7e8040',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white',
            paddingBottom: 2,
          }}>
          Genel Toplam
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white',
            paddingBottom: 2,
          }}>
          1234
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
