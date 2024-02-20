import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import ReceiptProduct from '../ReceiptProduct/ReceiptProduct.js';
import styles from './styles.js';

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
    <View style={styles.receiptContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.company}>
          32bit Bilgisayar Hizmetleri Ltd. Şti.
        </Text>
      </View>
      <View style={{flex: 0.8}}>
        <View style={styles.infoContainer}>
          <Text style={styles.contact}>Bağdat Cad. Kumbaracılar Sk. No:18</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.contact}>+90 (216) 348 60 43</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.contact}>İstanbul</Text>
        </View>
      </View>
      <View style={styles.receiptDetailContainer}>
        <View style={styles.receiptDetailLeftSection}>
          <Text style={styles.receiptInfoText}>Tarih : {date}</Text>
          <Text style={styles.receiptInfoText}>Saat : {time}</Text>
          <Text style={styles.receiptInfoText}>
            Kasiyer Kodu : {cashierCode}
          </Text>
        </View>
        <View style={styles.receiptDetailRightSection}>
          <Text style={styles.receiptInfoText}>
            Nakit Ödeme : {cash.toFixed(2)}₺
          </Text>
          <Text style={styles.receiptInfoText}>
            Kredi Kartı Ödeme : {creditCard.toFixed(2)}₺
          </Text>
        </View>
      </View>
      <View style={styles.cartListContainer}>
        <FlatList
          style={{width: '100%'}}
          key={'_'}
          data={cart}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ReceiptProduct
              name={item.name}
              barcode={item.barcode}
              price={item.price}
              quantity={item.quantity}
            />
          )}
        />
      </View>
      <View style={styles.priceInfoSection}>
        <View style={styles.priceContainer}>
          <Text style={styles.receiptInfoText}>Alınan Para</Text>
          <Text style={styles.receiptInfoText}>
            {(cash + creditCard).toFixed(2)}₺
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.receiptInfoText}>Para Üstü</Text>
          <Text style={styles.receiptInfoText}>{cashBack.toFixed(2)}₺</Text>
        </View>
      </View>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.receiptInfoText}>Genel Toplam</Text>
        <Text style={styles.receiptInfoText}>{total.toFixed(2)}₺</Text>
      </View>
      <View style={styles.barcodeContainer}>
        <Image
          source={require('../../assets/images/barcode.png')}
          style={styles.barcodeImage}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default ShoppingReceipt;
