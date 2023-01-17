import Events from '../screens/events/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/profile/index';
import Search from '../screens/search/index';
import Favourites from '../screens/favourites/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#787474',
      }}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color, size, focused}) => (
            <Feather name="search" color={focused ? '#000000' : '#787474'} size={25} />
          ),
        }}
        name="search "
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({color, size, focused}) => (
            <EvilIcons name="calendar" color={focused ? '#000000' : '#787474'} size={38} />
          ),
        }}
        name="Events"
        component={Events}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'favourites',
          tabBarIcon: ({color, size, focused}) => (
            <Feather name="heart" color={focused ? '#000000' : '#787474'} size={25} />
          ),
        }}
        name="favourites"
        component={Favourites}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({color, size, focused}) => (
            <Feather name="user" color={focused ? '#000000' : '#787474'} size={25} />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
