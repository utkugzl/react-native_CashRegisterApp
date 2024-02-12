import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BarChart, PieChart, ProgressChart} from 'react-native-chart-kit';
import {useTranslation} from 'react-i18next';
import {Dimensions} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import axios from 'axios';
import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';

const initialData = [
  {
    name: 'Market',
    count: 1,
    color: '#A51717',
    legendFontColor: '#7F7F7F',
    legendFontSize: 18,
  },
  {
    name: 'Temizlik',
    count: 1,
    color: '#CAD230',
    legendFontColor: '#7F7F7F',
    legendFontSize: 18,
  },
  {
    name: 'Giyim',
    count: 1,
    color: '#307BD2',
    legendFontColor: '#7F7F7F',
    legendFontSize: 18,
  },
  {
    name: 'Ev&Yaşam',
    count: 1,
    color: '#38B85A',
    legendFontColor: '#7F7F7F',
    legendFontSize: 18,
  },
  {
    name: 'Kozmetik',
    count: 1,
    color: '#7B387F',
    legendFontColor: '#7F7F7F',
    legendFontSize: 18,
  },
];

const Dashboard = () => {
  const {t} = useTranslation();
  const {isDarkMode} = useContext(ThemeContext);
  const {dailySalesAmount} = useContext(StoreContext);
  const [sales, setSales] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState(initialData);
  const styles = isDarkMode ? stylesDark : stylesLight;

  const dailySalesData = {
    labels: [t('completed')],
    data: [dailySalesAmount / 2000],
  };

  const fetchSales = async () => {
    try {
      const url = 'http://10.0.2.2:3000/sales';
      const response = await axios.get(url);
      setSales(response.data);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchSales();
    };

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
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>
              {t('daily-sales-category-distribution')}
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <PieChart
              data={categoryCounts}
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
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Text style={styles.title}>{t('daily-sales-goal')}</Text>
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
