import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BarChart, PieChart, ProgressChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';

import stylesDark from './stylesDark.js';
import stylesLight from './stylesLight.js';
const datas = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const adata = {
  labels: ['Sale Goal'],
  data: [0.6],
};

const Dashboard = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? stylesDark : stylesLight;
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>Satış Geçmişi</Text>
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
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={Dimensions.get('window').height / 3.5}
          yAxisLabel="₺"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#00cbe2',
            backgroundGradientFrom: isDarkMode ? '#491730' : '#a14848',
            backgroundGradientTo: isDarkMode ? '#071b41' : '#5c2828',
            decimalPlaces: 2, // optional, defaults to 2dp
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
            <Text style={styles.title}>Günlük Satış Dağılımı</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <PieChart
              data={datas}
              width={Dimensions.get('window').width / 2}
              height={Dimensions.get('window').height / 3}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor={'population'}
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
            <Text style={styles.title}>Günlük Satış</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ProgressChart
              data={adata}
              width={Dimensions.get('window').width / 2}
              height={Dimensions.get('window').height / 3}
              strokeWidth={50}
              radius={120}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: isDarkMode ? '#222831' : '#DDDDDD',
                backgroundGradientTo: isDarkMode ? '#222831' : '#DDDDDD',
                color: (opacity = 1) => `rgba(222, 216, 15, ${opacity})`,
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
