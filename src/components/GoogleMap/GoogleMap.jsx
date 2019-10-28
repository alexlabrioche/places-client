import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from 'grommet';

const GoogleMap = ({ children, ...props }) => (
  <Box fill>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Box>
);

export default GoogleMap;
