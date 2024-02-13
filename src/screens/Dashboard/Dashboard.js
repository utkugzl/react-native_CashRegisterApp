import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BarChart, PieChart, ProgressChart} from 'react-native-chart-kit';
import {useTranslation} from 'react-i18next';
import {Dimensions} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const Dashboard = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const {dailySalesAmount, salesCount} = useContext(StoreContext);
  const {offlineSalesCount} = useContext(ReportsContext);

  const styles = isDarkMode ? stylesDark : stylesLight;

  const dailySalesData = {
    labels: [t('completed')],
    data: [dailySalesAmount / 5000],
  };

  const salesData = [
    {
      name: 'Aktarıldı',
      count: salesCount,
      color: '#1f903d',
      legendFontColor: '#7F7F7F',
      legendFontSize: 18,
    },
    {
      name: 'Aktarılamadı',
      count: offlineSalesCount,
      color: '#6f1616',
      legendFontColor: '#7F7F7F',
      legendFontSize: 18,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{t('monthly-sales-distribution')}</Text>
      </View>
      <View
        style={{
          flex: 1.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BarChart
          data={{
            labels: [
              'Ocak',
              'Şubat',
              'Mart',
              'Nisan',
              'Mayıs',
              'Haziran',
              'Temmuz',
              'Ağustos',
              'Eylül',
              'Ekim',
              'Kasım',
              'Aralık',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 1000000,
                  Math.random() * 100000,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width * 0.95}
          height={Dimensions.get('window').height / 3.5}
          yAxisSuffix="₺"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#00cbe2',
            backgroundGradientFrom: isDarkMode ? '#491730' : '#a14848',
            backgroundGradientTo: isDarkMode ? '#071b41' : '#5c2828',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#c59e64',
            },
          }}
          bezier
          style={{
            marginHorizontal: 8,
            borderWidth: 2,
            marginTop: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        {salesCount > 0 && (
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={styles.title}>{t('sending-sales-status')}</Text>
            </View>
            <View
              style={{
                flex: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <PieChart
                data={salesData}
                width={Dimensions.get('window').width / 2}
                height={Dimensions.get('window').height / 3}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={'count'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                center={[25, 30]}
                absolute
              />
            </View>
          </View>
        )}
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Text style={styles.title}>
              {t('daily-sales-goal')}
              {'  '}
              {dailySalesAmount} ₺
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ProgressChart
              data={dailySalesData}
              width={Dimensions.get('window').width / 2}
              height={Dimensions.get('window').height / 3}
              strokeWidth={50}
              radius={120}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: isDarkMode ? '#222831' : '#DDDDDD',
                backgroundGradientTo: isDarkMode ? '#222831' : '#DDDDDD',
                color: (opacity = 1) =>
                  isDarkMode
                    ? `rgba(245, 109, 0, ${opacity})`
                    : `rgba(243, 109, 0, ${opacity})`,
                labelColor: (opacity = 1) =>
                  isDarkMode
                    ? `rgba(255, 255, 255, ${opacity})`
                    : `rgba(0, 0, 0, ${opacity})`,
              }}
              hideLegend={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
