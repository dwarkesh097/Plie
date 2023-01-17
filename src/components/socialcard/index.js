import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import { styles } from './style';

const SocialCard = props => {
  const {path, width, height} = props;
  return (
    <View style={styles.social}>
      <Text>
        <Image
          source={path}
          style={{width: width, height: height, marginHorizontal: 10}}
        />
        ;
      </Text>
    </View>
  );
};

export default SocialCard;


