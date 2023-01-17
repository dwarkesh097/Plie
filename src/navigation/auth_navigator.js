import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../screens/login/index';
import Events from '../screens/events';
import BottomTab from './bottom_navigator';
import { View,Text } from 'react-native';

const Stack = createStackNavigator();


const Hello = () =>{
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}

const AuthNavigator = () => (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginScreen"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="BottomTab"
      component={BottomTab}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="hello"
      component={Hello}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
