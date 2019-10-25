import React, { useContext } from 'react';
import AddPlaceForm from '../../components/AddPlaceForm';
import { Box, ResponsiveContext } from 'grommet';

function AddPlace() {
  const size = useContext(ResponsiveContext);
  const submitForm = (payload) => {
    console.info('Form Submitted', payload);
  };
  return (
    <Box fill pad="medium" align={size === 'small' ? 'stretch' : 'center'}>
      <Box fill="vertical" width={size === 'small' ? 'auto' : '40%'}>
        <AddPlaceForm submitForm={submitForm} />
      </Box>
    </Box>
  );
}

export default AddPlace;
