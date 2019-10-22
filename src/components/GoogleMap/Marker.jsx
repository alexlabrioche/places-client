import React from 'react';
import PropTypes from 'prop-types';
import { LocationPin } from 'grommet-icons';

const Marker = ({ text, onClick }) => <LocationPin color="brand" size="medium" />;

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
