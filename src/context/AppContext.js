import React, { createContext, useReducer, useMemo } from 'react';
import { setToken } from '../services/api';
import { logoutUser, authUser } from './actions/authActions';
import { loadUsers, addComment, getUserComments } from './actions/userActions';
import userReducer from './reducers/userReducer';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

export const AppContext = createContext();

// localStorage.setItem(
//   'jwtToken',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
// );
export const DEFAULT_APP_STATE = {
  isAuthenticated: false,
  user: {},
};

function AppProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, DEFAULT_APP_STATE);
  // console.info('user', user);
  let history = useHistory();
  console.info('history', history);

  useMemo(() => {
    if (localStorage.jwtToken) {
      setToken(localStorage.jwtToken);
      authUser(dispatch, history)('login', jwtDecode(localStorage.jwtToken));
    }
  }, [history]);

  return (
    <AppContext.Provider
      value={{
        ...user,
        loadUsers: loadUsers(dispatch),
        addComment: addComment(dispatch),
        getUserComments: getUserComments(dispatch),
        authUser: authUser(dispatch, history),
        logout: logoutUser(dispatch, history),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
