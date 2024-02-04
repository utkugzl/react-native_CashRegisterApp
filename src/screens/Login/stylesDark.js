import {StyleSheet} from 'react-native';
import scaleByHeight from '../../utils/ScaleByHeight.js';
import scaleByWidth from '../../utils/ScaleByWidth.js';

const stylesDark = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#222831',
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
    marginTop: 10,
    color: '#DDDDDD',
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
    color: '#DDDDDD',
  },
  descriptionText: {
    fontSize: scaleByWidth('1.5'),
    color: '#DDDDDD',
  },
  errorMessageText: {
    fontSize: scaleByWidth('1.5'),
    color: '#F05454',
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
    margin: 12,
    paddingLeft: 10,
  },
  showPasswordContainer: {
    marginRight: 15,
  },
});

export default stylesDark;
