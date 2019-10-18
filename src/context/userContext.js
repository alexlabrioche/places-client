import React, { createContext, useReducer, useEffect } from 'react';
import { setToken } from '../services/api';
import { logoutUser, authUser } from './actions/userActions';
import userReducer from './reducers/userReducer';
import { DEFAULT_STATE } from './actionsTypes';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

// localStorage.setItem(
//   'jwtToken',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
// );

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, DEFAULT_STATE);
  let history = useHistory();
  useEffect(() => {
    if (localStorage.jwtToken) {
      setToken(localStorage.jwtToken);
      authUser(dispatch)('me', jwtDecode(localStorage.jwtToken));
    }
  }, []);
  useEffect(() => {
    if (user.isAuthenticated) {
      history.push('/');
    }
  }, [user, history]);
  return (
    <UserContext.Provider
      value={{ user, authUser: authUser(dispatch), logout: logoutUser(dispatch) }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
