import {StyleSheet} from 'react-native';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerLeftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderColor: '#DDDDDD',
  },
  headerLeftTextContainer: {
    marginLeft: 30,
  },
  text: {
    color: '#DDDDDD',
    fontSize: scaleByWidth('2'),
    fontWeight: 'bold',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: '#DDDDDD',
  },
  headerRightTextContainer: {
    marginRight: 30,
  },
  listContainer: {
    flex: 4,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#DDDDDD',
  },
  totalText: {
    fontSize: scaleByWidth('2.6'),
    fontWeight: 'bold',
    marginRight: 20,
    color: '#DDDDDD',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: '#b73612',
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});

export default stylesDark;
