import React, { useContext } from 'react';
import { Box, Heading } from 'grommet';
import { AuthContext } from '../context/authContext';

function AppBar({ ...otherProps }) {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <Box
      flex
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'medium', horizontal: 'medium' }}
      {...otherProps}
      background="light-1"
    >
      <Heading level={3} margin="none">
        app
      </Heading>
    </Box>
  );
}

export default AppBar;
