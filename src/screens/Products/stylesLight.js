import {StyleSheet} from 'react-native';

const stylesLight = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  filterButtonContainer: {
    flex: 0.6,
    flexDirection: 'row',
    marginTop: 8,
  },
  listContainer: {
    backgroundColor: '#DDDDDD',
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
    borderColor: '#dddddd',
  },
});

export default stylesLight;
