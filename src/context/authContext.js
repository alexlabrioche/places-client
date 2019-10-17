import React, { createContext, useReducer, useEffect } from 'react';
import { setToken, apiCall } from '../services/api';
import jwtDecode from 'jwt-decode';
export const AuthContext = createContext();

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const { jwtToken } = localStorage;
if (jwtToken) {
  setToken(jwtToken);
}

function authUser(type, userData) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem('jwtToken', token);
          setToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.message));
          reject();
        });
    });
  };
}

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.payload) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useReducer(reducer, {});
  useEffect(() => {}, []);
  console.info('authenticated', authenticated);
  return (
    <AuthContext.Provider value={{ ...authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
