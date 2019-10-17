import React from 'react';
import { Box } from 'grommet';
import { Switch, Route } from 'react-router-dom';

import AppBar from '../containers/AppBar';
import HomeContainer from '../containers/Home';

function MainLayout() {
  return (
    <Box fill height={{ min: '100vh' }}>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </Box>
  );
}

export default MainLayout;
