import React, { useState } from 'react';
import { Form, FormField, Button, Box } from 'grommet';

const DEFAULT_FORM = {
  email: 'test4@mail.com',
  password: 'test',
  // username: 'testZer',
  // confirm: 'test',
};

function AuthForm({ isSignUp, toggleForm, onSubmit }) {
  const [values, setValues] = useState(DEFAULT_FORM);
  const handleForm = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setValues((s) => ({ ...s, [key]: value }));
  };
  const { username, email, password, confirm } = values;
  return (
    <Form onSubmit={() => onSubmit(values)}>
      {isSignUp && (
        <FormField
          name="username"
          value={username}
          label="Nom d'utilisateur"
          onChange={(e) => handleForm(e)}
        />
      )}
      <FormField
        name="email"
        value={email}
        label="Email"
        type="email"
        onChange={(e) => handleForm(e)}
      />
      <FormField
        name="password"
        value={password}
        type="password"
        label="Mot de passe"
        onChange={(e) => handleForm(e)}
      />
      {isSignUp && (
        <FormField
          name="confirm"
          value={confirm}
          label="Confirmer"
          onChange={(e) => handleForm(e)}
        />
      )}
      <Button fill type="submit" primary label="Valider" />
      <Box fill="horizontal" align="end">
        <Button margin={{ top: 'medium' }} onClick={() => toggleForm((s) => !s)}>
          {isSignUp ? 'Déjà enregistré ?' : 'Nouveau ici ?'}
        </Button>
      </Box>
    </Form>
  );
}

export default AuthForm;
