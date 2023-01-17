import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import EventCard from '../../components/eventcards';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import * as getMoviesActions from '../../redux/actions/movieListActions';

const Events = () => {
  const dispatch = useDispatch();
  const moviesResult = useSelector(state => state.loginReducer.token);
  useEffect(() => {
    dispatch(getMoviesActions.requestMovies(moviesResult));
  }, []);

  // console.log('moviesResult', moviesResult);
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello Renzo!</Text>
        <Text style={styles.titleSecond}>Are you ready to dance?</Text>
      </View>
      <View style={styles.container}>
        <EventCard />
      </View>
    </View>
  );
};

export default Events;
