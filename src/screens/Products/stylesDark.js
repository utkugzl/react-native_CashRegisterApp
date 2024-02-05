import {StyleSheet} from 'react-native';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  filterButtonContainer: {
    flex: 0.6,
    flexDirection: 'row',
    marginTop: 8,
  },
  listContainer: {
    backgroundColor: '#222831',
    flex: 6,
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 15,
  },
  categoryButtonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: '#222831',
  },
});

export default stylesDark;
