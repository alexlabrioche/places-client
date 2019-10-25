import React, { Fragment, useContext, useState, useEffect } from 'react';
import EmptyMap from '../../components/EmptyMap';
import { GoogleMap, Marker } from '../../components/GoogleMap';
import { AppContext } from '../../context/AppContext';

const PARIS_CENTER = [48.8534, 2.3488];

function MapContainer({ google }) {
  const { user } = useContext(AppContext);
  const [places, setplaces] = useState([]);
  console.info('Map Container places', places);
  // useEffect(() => {
  //   const { isSelected, shop } = selectedShop;
  //   if (isSelected) {
  //     console.info('fireUseEffect');
  //     setplaces([shop]);
  //   }
  // }, [selectedShop]);

  const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
      console.info('forEach place', place);
      bounds.extend(new maps.LatLng(place.coordinates.latitude, place.coordinates.longitude));
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
      {places.length > 0 ? (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={PARIS_CENTER}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
        >
          {places.map((place) => (
            <Marker
              key={place.id}
              text={place.name}
              lat={place.coordinates.latitude}
              lng={place.coordinates.longitude}
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
