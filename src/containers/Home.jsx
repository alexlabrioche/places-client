import React, { useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';

function Home() {
  const size = useContext(ResponsiveContext);
  // const {user} = useContext(ResponsiveContext);
  let isMobile = size === 'small' ? true : false;
  return (
    <Box fill direction={isMobile ? 'column' : 'row'}>
      <Box flex={{ grow: 1 }} fill={isMobile ? 'horizontal' : 'vertical'} background="brand">
        Side
      </Box>
      <Box flex={{ grow: 3 }} fill={isMobile ? 'horizontal' : 'vertical'} background="accent">
        Map
      </Box>
    </Box>
  );
}

export default Home;
