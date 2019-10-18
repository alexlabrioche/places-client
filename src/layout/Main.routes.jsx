import React, { useContext } from 'react';
import { Box } from 'grommet';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppBar from '../containers/AppBar';
import HomeContainer from '../containers/Home';
import AuthContainer from '../containers/Auth';
import { UserContext } from '../context/userContext';

function MainLayout() {
  const { user } = useContext(UserContext);
  return (
    <Box fill height={{ min: '100vh' }}>
      <AppBar />
      <Switch>
        <Route exact path="/">
          {user.isAuthenticated ? <HomeContainer /> : <Redirect to="/sign" />}
        </Route>
        <Route exact path="/sign" component={AuthContainer} />
      </Switch>
    </Box>
  );
}

export default MainLayout;
