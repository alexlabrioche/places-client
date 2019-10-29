import React, { Fragment, useContext } from 'react';
import EmptyMap from '../../components/EmptyMap';
import { GoogleMap, Marker } from '../../components/GoogleMap';
import { AppContext } from '../../context/AppContext';

const PARIS_CENTER = [48.8534, 2.3488];

function MapContainer({ google }) {
  const { user, history } = useContext(AppContext);

  const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
    user.places.forEach((place) => {
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
    const bounds = getMapBounds(map, maps, places);
    map.fitBounds(bounds);
    bindResizeListener(map, maps, bounds);
  };
  const onMarkerClick = (markerSlug) => {
    history.push(`/place/${markerSlug}`);
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
          {user.places.map(({ name, _id, slug, location: { coordinates } }) => (
            <Marker
              key={_id}
              id={slug}
              text={name}
              lat={coordinates.lat}
              lng={coordinates.lng}
              onClick={onMarkerClick}
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
