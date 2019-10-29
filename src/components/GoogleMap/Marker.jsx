import React from 'react';
import PropTypes from 'prop-types';
import { LocationPin } from 'grommet-icons';
import styled from 'styled-components';

const StyledMarker = styled.div`
  position: absolute;
  cursor: pointer;
  transform: translate(-50%, -50%);
  &:hover .show-infos {
    opacity: 1;
  }
  .show-infos {
    position: absolute;
    opacity: 0;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: white;
    font-size: 1rem;
    transition: 0.3s ease;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Marker = ({ text, id, onClick }) => (
  <StyledMarker onClick={() => onClick(id)}>
    <LocationPin margin="none" pad="none" color="brand" size="medium" />
    <div className="show-infos">{text}</div>
  </StyledMarker>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
