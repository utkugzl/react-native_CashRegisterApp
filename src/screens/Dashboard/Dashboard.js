import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {PieChart, ProgressChart} from 'react-native-chart-kit';
import {useTranslation} from 'react-i18next';
import {Dimensions} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {StoreContext} from '../../contexts/StoreContext.js';
import {ReportsContext} from '../../contexts/ReportsContext.js';
import MonthlyBarChart from './Components/MonthlyBarChart/MonthlyBarChart.js';

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

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('monthly-sales-distribution')}</Text>
      </View>
      <View style={styles.monthlyBarChartContainer}>
        <MonthlyBarChart isDarkMode={isDarkMode} />
      </View>
      <View style={styles.pieChartSection}>
        {salesCount > 0 && (
          <View style={styles.flex1}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{t('sending-sales-status')}</Text>
            </View>
            <View style={styles.leftPieChart}>
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
        <View style={styles.flex1}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {t('daily-sales-goal')}
              {'  '}
              {dailySalesAmount.toFixed(2)} ₺
            </Text>
          </View>
          <View style={styles.rightPieChart}>
            <ProgressChart
              data={dailySalesData}
              width={Dimensions.get('window').width / 2}
              height={Dimensions.get('window').height / 3}
              strokeWidth={50}
              radius={103}
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
