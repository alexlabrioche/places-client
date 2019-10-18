import React, { useState, useContext } from 'react';
import { Box, Heading } from 'grommet';
import AuthForm from '../components/AuthForm';
import { UserContext } from '../context/userContext';

const DEFAULT_FORM = { email: '', password: '', username: '', confirm: '' };

function Auth() {
  const [values, setValues] = useState(DEFAULT_FORM);
  const [isSignUp, toggleForm] = useState(false);
  const { authUser } = useContext(UserContext);
  const handleForm = (e, key) => {
    e.persist();
    setValues((s) => ({ ...s, [key]: e.target.value }));
  };
  const handleSubmit = () => {
    let type = isSignUp ? 'signup' : 'login';
    authUser(type, values);
  };
  return (
    <Box fill align="center" justify="center" background="light-1">
      <Box elevation="small" pad="large" round="xsmall" background="white">
        <Heading level={2}>{isSignUp ? `S'enregister` : `Se connecter`}</Heading>
        <AuthForm
          isSignUp={isSignUp}
          values={values}
          handleForm={handleForm}
          onSubmit={handleSubmit}
          toggleFormType={() => toggleForm((s) => !s)}
        />
      </Box>
    </Box>
  );
}

export default Auth;
