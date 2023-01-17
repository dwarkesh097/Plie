import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const SocialCard = props => {
  const {path, width, height} = props;
  return (
    <TouchableOpacity>
      <View style={styles.social}>
        <Text>
          <Image source={path} style={{width: width, height: height}} />;
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialCard;
