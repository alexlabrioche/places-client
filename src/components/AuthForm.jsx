import React from 'react';
import { Form, FormField, Button } from 'grommet';

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
      <Button margin={{ top: 'small' }} plain onClick={toggleFormType}>
        {isSignUp ? 'Déjà enregistré ?' : 'Nouveau ici ?'}
      </Button>
    </Form>
  );
}

export default AuthForm;
