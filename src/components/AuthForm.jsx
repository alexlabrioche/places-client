import React from 'react';
import { Form, FormField, Button, Box } from 'grommet';

function AuthForm({ isSignUp, toggleFormType, handleForm, onSubmit, values }) {
  const { username, email, password, confirm } = values;
  return (
    <Form onSubmit={onSubmit}>
      {isSignUp && (
        <FormField
          name="username"
          value={username}
          label="Nom d'utilisateur"
          onChange={(e) => handleForm(e, 'username')}
        />
      )}
      <FormField
        name="email"
        value={email}
        label="Email"
        type="email"
        onChange={(e) => handleForm(e, 'email')}
      />
      <FormField
        name="password"
        value={password}
        type="password"
        label="Mot de passe"
        onChange={(e) => handleForm(e, 'password')}
      />
      {isSignUp && (
        <FormField
          name="confirm"
          value={confirm}
          label="Confirmer"
          onChange={(e) => handleForm(e, 'confirm')}
        />
      )}
      <Button fill type="submit" primary label="Valider" />
      <Box fill="horizontal" align="end">
        <Button margin={{ top: 'medium' }} onClick={toggleFormType}>
          {isSignUp ? 'Déjà enregistré ?' : 'Nouveau ici ?'}
        </Button>
      </Box>
    </Form>
  );
}

export default AuthForm;
