import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

export default Search;

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
