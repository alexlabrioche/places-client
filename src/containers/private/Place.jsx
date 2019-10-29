import React, { useContext } from 'react';
import { Box, Text, Heading } from 'grommet';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
function Place() {
  const [place, setPlace] = React.useState({ isLoading: true });
  const { user } = useContext(AppContext);
  const { place_id } = useParams();
  console.info('HISTORY', place_id);
  console.info('place', place);
  React.useEffect(() => {
    setPlace(...user.places.filter((place) => place.slug === place_id));
  }, []);
  return (
    <Box fill="horizontal" align="center" pad="medium">
      <Box fill="vertical" width="920px">
        {!place.isLoading ? (
          <>
            <Heading>{place.name}</Heading>
            <Text>{place.description}</Text>
          </>
        ) : (
          'chargement'
        )}
      </Box>
    </Box>
  );
}

export default Place;
