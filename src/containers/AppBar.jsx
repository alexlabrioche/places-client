import React, { useContext } from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import { UserContext } from '../context/userContext';

function AppBar({ ...otherProps }) {
  const { user, logout } = useContext(UserContext);
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'small', horizontal: 'medium' }}
      {...otherProps}
      background="light-1"
    >
      <Heading level={2} margin="none">
        app
      </Heading>
      <Box direction="row" align="baseline">
        {user.isAuthenticated && (
          <>
            <Text margin={{ right: 'small' }} size="small">
              Bienvenue {user.user.username}
            </Text>
            <Button label="logout" primary color="accent" onClick={() => logout()} />
          </>
        )}
      </Box>
    </Box>
  );
}

export default AppBar;
