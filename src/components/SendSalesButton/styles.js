import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
  },
  container: {
    flexDirection: 'row',
    width: 350,
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 2,
  },
  badge: {
    backgroundColor: '#ad2222',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -12,
    right: -12,
  },
  badgeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
