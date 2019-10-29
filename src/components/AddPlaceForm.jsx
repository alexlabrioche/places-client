import React, { useState } from 'react';
import { Box, Form, FormField, Button, TextArea, CheckBox, Select } from 'grommet';
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
  tags: [],
  image: {},
};

const DEFAULT_ERRORS = { name: null, description: null, address: null };

const TAGS_OPTIONS = ['bar', 'restaurant', 'culture', 'visite', 'parc'];

const Option = ({ value, selected }) => {
  return (
    <Box direction="row" gap="small" align="center" pad="xsmall">
      <CheckBox tabIndex="-1" checked={selected} onChange={() => {}} />
      {value}
    </Box>
  );
};

function AddPlaceForm({ submitForm }) {
  const [values, setValues] = useState(DEFAULT_VALUES);
  console.info(values);
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState(TAGS_OPTIONS);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const handleSubmit = () => {
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
  const handleFile = (e) => {
    let image = e.target.files[0];
    setValues((s) => ({ ...s, image }));
  };

  const handleSelectChange = ({ option, selected: nextSelected }) => {
    setSelected(nextSelected);
    setValues((s) => {
      if (s.tags.includes(option)) {
        s.tags.pop(option);
      } else {
        s.tags.push(option);
      }
      return { ...s };
    });
  };

  const handleSelectClose = (e) => {
    setOptions(
      options.sort((p1, p2) => {
        const p1Exists = selected.includes(p1);
        const p2Exists = selected.includes(p2);
        if (!p1Exists && p2Exists) {
          return 1;
        }
        if (p1Exists && !p2Exists) {
          return -1;
        }
        return p1.localeCompare(p2, undefined, {
          numeric: true,
          sensitivity: 'base',
        });
      }),
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Nom"
        value={values.name}
        name="name"
        type="string"
        onChange={handleForm}
        error={errors.name}
      />
      <FormField
        label="Description"
        htmlFor="text-area"
        name="description"
        component={TextArea}
        value={values.description}
        onChange={handleForm}
        error={errors.description}
      />
      <Select
        multiple
        closeOnChange={false}
        placeholder="Selectionner des tags..."
        selected={selected}
        options={options}
        dropHeight="medium"
        onClose={handleSelectClose}
        onChange={(e) => handleSelectChange(e)}
      >
        {(option, index) => <Option value={option} selected={selected.indexOf(index) !== -1} />}
      </Select>
      <PlacesAutocomplete onPlaceSelected={setValues} handleError={errors.address} />
      {/* <CheckBox
        checked={checked}
        label="interested?"
        onChange={(event) => setChecked(event.target.checked)}
      /> */}
      <input type="file" onChange={(e) => handleFile(e)} />

      <Button type="submit" primary label="Ajouter" />
    </Form>
  );
}

export default AddPlaceForm;
