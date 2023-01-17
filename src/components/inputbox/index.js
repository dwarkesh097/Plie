import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { styles } from './style';

const InputBox = props => {
  const {placeHolderName,value, onChangeText,} = props;
  return (
    <View>
      <Text style={styles.title}>Email</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#828282'}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolderName}
      />
    </View>
  );
};

export default InputBox;

