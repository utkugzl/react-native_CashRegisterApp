import {StyleSheet} from 'react-native';
import scaleByHeight from '../../utils/ScaleByHeight.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scaleByWidth('30'),
    height: scaleByHeight('10'),
  },
  versionText: {
    fontSize: scaleByHeight('2.5'),
    fontWeight: 'bold',
  },
  loginInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: 20,
  },
  welceomeText: {
    fontSize: scaleByHeight('2.5'),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: scaleByHeight('2'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: scaleByHeight('5'),
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  showPasswordContainer: {
    height: scaleByHeight('4'),
    width: scaleByWidth('3'),
    marginRight: 10,
  },
});

export default styles;
