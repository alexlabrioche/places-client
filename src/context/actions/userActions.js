import { LOAD_USERS, ADD_COMMENT } from '../actionsTypes';
import { apiCall } from '../../services/api';

export function loadUsers(dispatch) {
  return () => {
    return new Promise((resolve, reject) => {
      return apiCall('get', `api/users`)
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

export function addComment(dispatch) {
  return (id) => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `api/users/${id}/comments`)
        .then((payload) => {
          dispatch({ type: ADD_COMMENT, payload });
          resolve();
        })
        .catch((err) => {
          console.info(err);
          reject();
        });
    });
  };
}
