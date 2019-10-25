import React from 'react';
import AppProvider from './context/AppContext';
import ThemeProvider from './theme/themeProvider';
import AppLayout from './layout/AppLayout';
import { BrowserRouter as RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppProvider>
          <AppLayout />
        </AppProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
