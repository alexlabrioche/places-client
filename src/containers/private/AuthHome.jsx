import React, { useContext, useEffect } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import FavPlaceCard from '../../components/FavPlaceCard';
import { AppContext } from '../../context/AppContext';

function AuthHome() {
  const {
    user: { _id, places },
    getUser,
  } = useContext(AppContext);
  const size = useContext(ResponsiveContext);
  useEffect(() => {
    getUser(_id);
  }, []);
  return (
    <Box fill="horizontal" align="center">
      <Box fill="vertical" direction="row" wrap={true} width="920px">
        {places.map((place, idx) => (
          <FavPlaceCard key={idx} {...place} isMobile={size === 'small'} />
        ))}
      </Box>
    </Box>
  );
}

export default AuthHome;
