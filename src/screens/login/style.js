import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  image: {
    width: '100%',
    height: 363,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 60,
    fontFamily: 'Roboto-Medium',
    marginTop: 15,
    color: '#000',
  },
  container: {
    flex: 1,
    paddingHorizontal: 46,
  },
  email: {
    paddingTop: 38,
  },
  password: {
    marginTop: 15,
  },
  forgotPassword: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#000',
    alignSelf: 'flex-end',
    marginTop: 2,
    color: '#828282',
  },
  signInBtn: {
    width: 98,
    height: 35,
    backgroundColor: '#21D393',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 27,
  },
  signText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  signUpText: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  signWith: {
    fontSize: 12,
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    marginBottom: 35,
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  social: {
    width: 56,
    height: 56,
  },
  guest: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#4F4F4F',
    paddingRight: 20,
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
});
