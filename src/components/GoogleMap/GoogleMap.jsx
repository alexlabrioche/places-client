import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from 'grommet';

const REACT_APP_MAP_KEY = 'AIzaSyARHkrTDkfpyjR_k3y54EXwPTEjBuH0aOw';

const GoogleMap = ({ children, ...props }) => (
  <Box fill>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: REACT_APP_MAP_KEY,
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Box>
);

export default GoogleMap;
