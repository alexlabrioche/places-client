import React, { useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';

import ShopContainer from './Shops';
import MapContainer from './Map';

function Home() {
  const size = useContext(ResponsiveContext);
  let isMobile = size === 'small' ? true : false;
  return (
    <Box fill direction={isMobile ? 'column' : 'row'}>
      <Box flex={{ grow: 1 }} fill={isMobile ? 'horizontal' : 'vertical'}>
        <ShopContainer />
      </Box>
      <Box flex={{ grow: 4 }} fill={isMobile ? 'horizontal' : 'vertical'}>
        <MapContainer />
      </Box>
    </Box>
  );
}

export default Home;
