import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 102,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:4
  },
  directions: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 8,
  },
  text: {
    color: '#000',
  },
  eventName: {
    fontSize: 15,
    color: '#181A1F',
    fontFamily: 'Roboto-Medium',
    maxWidth: '80%',
  },
  time: {
    fontSize: 12,
    color: '#34A853',
    marginTop: 5,
  },
  price: {
    color: '#828282',
    fontSize: 11,
    // marginTop: 5,
  },
  keywords: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    color: '#181A1F',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
  workContainer: {
    backgroundColor: '#F5F7FC',
    borderRadius: 25,
  },
  country: {
    fontSize: 11,
    color: '#828282',
    marginTop: 18,
  },
  cityAndcountryContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  addMarg: {
    marginLeft: 10,
  },
  iconContainer: {
    height: '100%',
  },
  iconInerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 13,
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
    width: 14,
    height: 14,
  },
  uplodIcon: {
    width: 16,
    height: 20,
    alignSelf: 'flex-end',
  },
  icon: {
    width: 20,
    height: 18,
    marginLeft: 15,
  },
});
