import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {RestaurantsNavigator} from './restaurants.navigator';
import {MapScreen} from '../../features/map/screens/map.screen';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context';
import {SettingsNavigator} from './settings.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: 'restaurant',
  Map: 'ios-map',
  Setting: 'settings',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name="Restaurant"
              component={RestaurantsNavigator}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Setting"
              component={SettingsNavigator}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
