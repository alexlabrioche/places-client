import React, { useContext } from 'react';
import ImageContainer from '../components/core/ImageContainer';
import Link from '../components/core/Link';
import { Box, Heading, Text } from 'grommet';
import { AppContext } from '../context/AppContext';
import PersonalSpace from '../components/Layers/PersonalSpace';
import { MapLocation, AddCircle } from 'grommet-icons';

function AppBar({ ...otherProps }) {
  const { user, isAuthenticated, logout } = useContext(AppContext);
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
      background={isAuthenticated ? 'brand' : 'none'}
      {...otherProps}
    >
      {isAuthenticated ? (
        <>
          <Box direction="row" align="center">
            <Link to="/">
              <Text margin={{ horizontal: 'small' }}>Home</Text>
            </Link>
            <Link to="/carte">
              {/* <MapLocation /> */}
              <Text margin={{ horizontal: 'small' }}>Ma carte</Text>
            </Link>
            <Link to="/ajouter">
              {/* <AddCircle /> */}
              <Text margin={{ horizontal: 'small' }}>Ajouter</Text>
            </Link>
          </Box>
          <Box direction="row" align="center">
            <Text>Salut {user.username}</Text>
            <PersonalSpace logout={logout} user={user} />
          </Box>
        </>
      ) : (
        <Box direction="row">
          <ImageContainer source="img/app-logo.png" style={{ transform: 'rotate(-15deg)' }} />
          <Heading level={2} margin="none" color="brand">
            PL_CES
          </Heading>
        </Box>
      )}
    </Box>
  );
}

export default AppBar;
