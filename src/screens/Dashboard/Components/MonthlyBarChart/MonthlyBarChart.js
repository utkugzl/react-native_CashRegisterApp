import {BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const MonthlyBarChart = ({isDarkMode}) => {
  return (
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
              Math.random() * 1000000,
              Math.random() * 1000000,
              Math.random() * 1000000,
              Math.random() * 1000000,
              Math.random() * 1000000,
              Math.random() * 1000000,
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
  );
};

export default MonthlyBarChart;
