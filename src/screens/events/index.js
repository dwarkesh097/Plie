import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import EventCard from '../../components/eventcards';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import * as getEventActions from '../../redux/actions/eventListActions';

const Events = () => {
  const dispatch = useDispatch();

  const loginTokenResult = useSelector(state => state.loginReducer.token);
  const eventList = useSelector(
    state => state.eventListReducer.responseData.events,
  );

  useEffect(() => {
    dispatch(getEventActions.requestEvents(loginTokenResult));
  }, []);

  /**
     * It is used to render Item UIs.
     */
  const renderItemUIs = item => {
    return (
      <>
        <EventCard
          event_name={item.event_name}
          event_profile_pic={item.event_profile_pic}
          event_profile_img={item.event_profile_img}
          readable_from_date={item.readable_from_date}
          readable_to_date={item.readable_to_date}
          event_price_from={item.event_price_from}
          event_price_to={item.event_price_to}
          city={item.city}
          country={item.country}
          keywords={item.keywords}
        />
      </>
    );
  };

  /**
     * It is used to render Event List UIs.
     */
  const renderEventList = () => {
    return (
      <FlatList
        data={eventList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => renderItemUIs(item)}
      />
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello Renzo!</Text>
        <Text style={styles.titleSecond}>Are you ready to dance?</Text>
      </View>
      <View style={styles.container}>{renderEventList()}</View>
    </View>
  );
};

export default Events;
