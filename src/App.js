import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './context/userContext';
import ThemeProvider from './theme/themeProvider';
import MainLayout from './layout/Main.routes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <UserProvider>
          <MainLayout />
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
