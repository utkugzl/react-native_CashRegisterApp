import {StyleSheet} from 'react-native';
import scaleByHeight from '../../utils/ScaleByHeight.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  title: {
    fontSize: scaleByWidth('2.3'),
    fontWeight: 'bold',
    color: 'black',
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthlyBarChartContainer: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChartSection: {
    flex: 3,
    flexDirection: 'row',
    marginTop: 25,
  },
  flex1: {
    flex: 1,
  },
  leftPieChart: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightPieChart: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default stylesLight;
