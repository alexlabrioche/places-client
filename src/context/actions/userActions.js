import { LOAD_USERS, GET_USER } from '../actionsTypes';
import { apiCall, GET } from '../../services/api';

export function loadUsers(dispatch) {
  return () => {
    return new Promise((resolve, reject) => {
      return apiCall(GET, `api/users`)
        .then((payload) => {
          console.info('apiCall', payload);
          dispatch({ type: LOAD_USERS, payload });
          resolve();
        })
        .catch((err) => {
          console.info(err);
          reject();
        });
    });
  };
}

export function getUser(dispatch) {
  return (id) => {
    return new Promise((resolve, reject) => {
      return apiCall(GET, `api/users/${id}`)
        .then((payload) => {
          console.info('apiCall', payload);
          dispatch({ type: GET_USER, payload: payload.Query });
          resolve();
        })
        .catch((err) => {
          console.info(err);
          reject();
        });
    });
  };
}
