import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const EventCard = () => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={require('../../assets/images/facebook.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.adicto}>ADICTO: Berlin Festival</Text>
        <Text style={styles.time}>24.02.2022 - 26.02.2022</Text>
        <Text style={styles.price}>€30 - €100</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.workContainer}>
            <Text style={styles.work}>Workshop</Text>
          </View>
          <View style={[styles.workContainer, styles.addMarg]}>
            <Text style={styles.work}>Bachata</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/rightarrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.country}>Berlin, Germany</Text>
        <View style={styles.iconInerContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/uplode.png')}
              style={styles.uplodIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/heart.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
