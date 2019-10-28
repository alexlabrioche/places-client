import React, { useContext } from 'react';
import AddPlaceForm from '../../components/AddPlaceForm';
import { Box, ResponsiveContext } from 'grommet';
import { AppContext } from '../../context/AppContext';

function AddPlace() {
  const size = useContext(ResponsiveContext);
  const { user, addPlace } = useContext(AppContext);
  const submitForm = (payload) => {
    console.info('Form Submitted', user._id, payload);
    addPlace(user._id, payload);
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
