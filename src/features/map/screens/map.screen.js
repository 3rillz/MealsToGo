import React, {useContext, useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import styled from 'styled-components';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {MapCallout} from '../components/map-callout.component';

import {Search} from '../components/search.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const RestaurantMap = ({navigation}) => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantsContext);
  const {lat, lng, viewport} = location;

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              value={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {restaurant})
                }>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({navigation}) => {
  const {location} = useContext(LocationContext);
  if (!location) {
    return (
      <>
        <Map
          region={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}></Map>
      </>
    );
  }
  return <RestaurantMap navigation={navigation} />;
};