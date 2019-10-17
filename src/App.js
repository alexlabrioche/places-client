import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/authContext';
import ThemeProvider from './theme/themeProvider';
import MainLayout from './layout/Main';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <MainLayout />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
