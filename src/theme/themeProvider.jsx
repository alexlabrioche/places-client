import React from 'react';
import { Grommet } from 'grommet';
import theme from './theme';

function ThemeProvider({ children }) {
  return (
    <Grommet full theme={theme}>
      {children}
    </Grommet>
  );
}

export default ThemeProvider;
