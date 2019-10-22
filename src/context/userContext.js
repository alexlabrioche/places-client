import React, { createContext, useReducer, useMemo } from 'react';
import { setToken } from '../services/api';
import { logoutUser, authUser } from './actions/authActions';
import { loadUsers, addComment } from './actions/userActions';
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
  console.info('user', user);
  let history = useHistory();
  useMemo(() => {
    if (localStorage.jwtToken) {
      setToken(localStorage.jwtToken);
      authUser(dispatch, history)('me', jwtDecode(localStorage.jwtToken));
    }
  }, [history]);
  return (
    <UserContext.Provider
      value={{
        currentUser: user,
        loadUsers: loadUsers(dispatch),
        addComment: addComment(dispatch),
        authUser: authUser(dispatch, history),
        logout: logoutUser(dispatch, history),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
