import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const StyledLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: inherit;
`;

function Link({ children, to, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
}

Link.propTypes = {
  children: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
