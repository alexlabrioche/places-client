import { SET_CURRENT_USER, LOGOUT_USER } from '../actionsTypes';
import { setToken, apiCall } from '../../services/api';

export function authUser(dispatch) {
  return (type, userData) => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          dispatch({ type: SET_CURRENT_USER, payload: user });
          localStorage.setItem('jwtToken', token);
          setToken(token);
          resolve();
        })
        .catch((err) => {
          console.info(err);
          reject();
        });
    });
  };
}
export function logoutUser(dispatch) {
  return () => {
    dispatch({ type: LOGOUT_USER, payload: {} });
    localStorage.clear();
    setToken(false);
  };
}
