import React, { Fragment, useContext, useState, useEffect } from 'react';
import EmptyMap from '../../components/EmptyMap';
import { GoogleMap, Marker } from '../../components/GoogleMap';
import { AppContext } from '../../context/AppContext';

const PARIS_CENTER = [48.8534, 2.3488];

function MapContainer({ google }) {
  const { user } = useContext(AppContext);

  const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
    user.places.forEach((place) => {
      console.info('forEach place', place);
      bounds.extend(
        new maps.LatLng(place.location.coordinates.lat, place.location.coordinates.lng),
      );
    });
    return bounds;
  };

  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  const apiIsLoaded = (map, maps, places) => {
    console.info('fire ApiIsLoaded');
    const bounds = getMapBounds(map, maps, places);
    map.fitBounds(bounds);
    bindResizeListener(map, maps, bounds);
  };

  return (
    <Fragment>
      {user.places.length > 0 ? (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={PARIS_CENTER}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, user.places)}
        >
          {user.places.map((place, idx) => (
            <Marker
              key={idx}
              text={place.name}
              lat={place.location.coordinates.lat}
              lng={place.location.coordinates.lng}
            />
          ))}
        </GoogleMap>
      ) : (
        <EmptyMap />
      )}
    </Fragment>
  );
}

export default MapContainer;
