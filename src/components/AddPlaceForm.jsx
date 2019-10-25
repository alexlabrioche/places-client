import React, { useState } from 'react';
import { Form, FormField, Button, TextArea } from 'grommet';
import PlacesAutocomplete from './PlacesAutocomplete';

const DEFAULT_VALUES = {
  name: '',
  description: '',
  location: {
    coordinates: {
      lat: '',
      lng: '',
    },
    address: '',
  },
};

const DEFAULT_ERRORS = { name: null, description: null, address: null };

function AddPlaceForm({ submitForm }) {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const onSubmit = () => {
    setErrors(DEFAULT_ERRORS);
    let errors = 0;
    if (values.name.length <= 2) {
      setErrors((s) => ({ ...s, name: 'Le nom doit faire 3 caractères minimum' }));
      errors += 1;
    }
    if (values.description.length > 160) {
      setErrors((s) => ({ ...s, description: 'La description doit faire 160 caractères maximum' }));
      errors += 1;
    }
    if (values.location.address.length === 0) {
      setErrors((s) => ({ ...s, address: "L'adresse est obligatoire" }));
      errors += 1;
    }
    if (errors > 0) {
      return;
    }
    submitForm(values);
  };
  const handleForm = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setValues((s) => ({ ...s, [key]: value }));
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormField
        label="Nom"
        value={values.name}
        name="name"
        type="string"
        onChange={handleForm}
        error={errors.name}
      />{' '}
      <FormField
        label="Description"
        htmlFor="text-area"
        name="description"
        component={TextArea}
        value={values.description}
        onChange={handleForm}
        error={errors.description}
      />
      <PlacesAutocomplete onPlaceSelected={setValues} handleError={errors.address} />
      <Button type="submit" primary label="Ajouter" />
    </Form>
  );
}

export default AddPlaceForm;
