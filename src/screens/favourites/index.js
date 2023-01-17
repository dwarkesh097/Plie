import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Favourites = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Favourites</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
