import { SET_CURRENT_USER, LOGOUT_USER } from '../actionsTypes';
import { setToken, apiCall } from '../../services/api';

export function authUser(dispatch, history) {
  return (type, userData) => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `api/auth/${type}`, userData)
        .then(({ token, Query }) => {
          dispatch({ type: SET_CURRENT_USER, payload: Query });
          history.push('/');
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

export function logoutUser(dispatch, history) {
  return () => {
    dispatch({ type: LOGOUT_USER, payload: {} });
    history.push('/');
    localStorage.clear();
    setToken(false);
  };
}
