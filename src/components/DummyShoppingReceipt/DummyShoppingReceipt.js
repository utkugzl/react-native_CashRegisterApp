import React from 'react';
import {View, Text, Image} from 'react-native';

const DummyShoppingReceipt = () => {
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
            Tarih : XXX
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Saat : XXX
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Kasiyer Kodu : XXX
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
            Saat : XXX
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Nakit Ödeme : XXXX ₺
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              paddingBottom: 2,
            }}>
            Kredi Kartı Ödeme : XXXX ₺
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          borderBottomWidth: 2,
          borderColor: '#67666c',
          backgroundColor: 'white',
        }}></View>
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
            XXXX ₺
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
            XXXX ₺
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
          XXXX ₺
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

export default DummyShoppingReceipt;
