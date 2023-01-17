import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const EventCard = props => {
  const {
    event_name,
    event_profile_pic,
    event_profile_img,
    readable_from_date,
    readable_to_date,
    event_price_from,
    event_price_to,
    city,
    country,
    keywords,
  } = props;

  return (
    <View style={styles.main}>
      <View>
        <Image source={{uri: event_profile_img}} style={styles.image} />
      </View>
      <View style={{width:'48%'}}>
        <Text numberOfLines={1} style={styles.eventName}>
          {event_name}
        </Text>
        <View style={styles.directions}>
          <Text style={styles.time}>{readable_from_date}</Text>
          <Text style={styles.time}> {readable_to_date}</Text>
        </View>
        <View style={styles.directions}>
          <Text style={styles.price}>€{event_price_from}</Text>
          <Text style={styles.price}>-€{event_price_to}</Text>
        </View>
        <View style={styles.directions}>
          {keywords == '' ? (
            <></>
          ) : (
            <>
              <View style={styles.workContainer}>
                <Text style={styles.keywords}>{keywords[0]}</Text>
              </View>
              <View style={[styles.workContainer, styles.addMarg]}>
                <Text style={styles.keywords}>{keywords[1]}</Text>
              </View>
            </>
          )}
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/rightarrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <View style={styles.cityAndcountryContainer}>
          <Text style={styles.country}>{city}</Text>
          <Text style={styles.country}>,{country}</Text>
        </View>
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
