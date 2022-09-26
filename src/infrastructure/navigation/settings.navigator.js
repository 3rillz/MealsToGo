import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {SettingsScreen} from '../../features/settings/screens/settings.screen';
import {StatusBar} from 'react-native';
import {FavouritesScreen} from '../../features/settings/screens/favourites.screen';
import {CameraScreen} from '../../features/settings/screens/camera.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route, navigation}) => {
  return (
    <>
      <SettingsStack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <SettingsStack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: false}}
        />
        <SettingsStack.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{headerShown: true}}
        />
        <SettingsStack.Screen
          name="Camera"
          component={CameraScreen}
          options={{headerShown: true}}
        />
      </SettingsStack.Navigator>
    </>
  );
};
