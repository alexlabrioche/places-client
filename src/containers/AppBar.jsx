import React, { useContext } from 'react';
import ImageContainer from '../components/core/ImageContainer';
import { Box, Heading, Text } from 'grommet';
import { UserContext } from '../context/userContext';
import ModalUserLayer from '../components/Layers/ModalUserLayer';

function AppBar({ ...otherProps }) {
  const { currentUser, logout } = useContext(UserContext);
  const { user, isAuthenticated } = currentUser;
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'small' }}
      {...otherProps}
    >
      <Box direction="row">
        <ImageContainer source="img/app-logo.png" style={{ transform: 'rotate(-15deg)' }} />
        <Heading level={2} margin="none" color="brand">
          Pins
        </Heading>
      </Box>

      <Box direction="row" align="center">
        {isAuthenticated && (
          <>
            <Text>{user.username}</Text>
            <ModalUserLayer logout={logout} user={user} />
          </>
        )}
      </Box>
    </Box>
  );
}

export default AppBar;
