import React, { useState, useContext } from 'react';
import { Box, Heading } from 'grommet';
import AuthForm from '../../components/AuthForm';
import { AppContext } from '../../context/AppContext';

function Sign() {
  const [isSignUp, toggleForm] = useState(false);
  const { authUser } = useContext(AppContext);

  const handleSubmit = (payload) => {
    console.info('submitted login');
    let type = isSignUp ? 'signup' : 'login';
    authUser(type, payload);
  };

  return (
    <Box fill align="center" justify="center">
      <Box elevation="small" pad="large" round="xsmall" background="white">
        <Heading level={2}>{isSignUp ? `S'enregister` : `Se connecter`}</Heading>
        <AuthForm isSignUp={isSignUp} onSubmit={handleSubmit} toggleForm={toggleForm} />
      </Box>
    </Box>
  );
}

export default Sign;
