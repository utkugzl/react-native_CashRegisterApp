import {StyleSheet} from 'react-native';
import scaleByHeight from '../../utils/ScaleByHeight.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesLight = StyleSheet.create({
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
    width: scaleByWidth('45'),
    height: scaleByHeight('13'),
    resizeMode: 'center',
  },
  versionText: {
    fontSize: scaleByHeight('2.5'),
    fontWeight: 'bold',
    marginTop: 5,
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
    fontSize: scaleByWidth('2'),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: scaleByWidth('1.5'),
  },
  errorMessageText: {
    fontSize: scaleByWidth('1.5'),
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  errorMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: scaleByHeight('6'),
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  showPasswordContainer: {
    marginRight: 15,
  },
});

export default stylesLight;
