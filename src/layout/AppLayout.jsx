import React, { useContext } from 'react';
import { Box } from 'grommet';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import AppBar from '../containers/AppBar';
import AuthContainer from '../containers/public/Sign';
import PublicHomeContainer from '../containers/public/PublicHome';
import MapContainer from '../containers/private/Map';
import PlaceContainer from '../containers/private/Place';
import AddPlaceContainer from '../containers/private/AddPlace';
import AuthHomeContainer from '../containers/private/AuthHome';

function MainLayout() {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <Box
      fill="horizontal"
      height={{ min: '100vh' }}
      background={isAuthenticated ? 'white' : 'light-1'}
    >
      <AppBar />

      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <AuthHomeContainer /> : <PublicHomeContainer />}
        </Route>
        <Route path="/sign">
          <AuthContainer />
        </Route>
        <PrivateRoute path="/carte">
          <MapContainer />
        </PrivateRoute>
        <PrivateRoute path="/ajouter">
          <AddPlaceContainer />
        </PrivateRoute>
        <PrivateRoute path="/place/:place_id">
          <PlaceContainer />
        </PrivateRoute>
      </Switch>
    </Box>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default MainLayout;
