import { ADD_PLACE } from '../actionsTypes';
import { apiCall, POST } from '../../services/api';

export function addPlace(dispatch, history) {
  return (id, data) => {
    return new Promise((resolve, reject) => {
      return apiCall(POST, `api/users/${id}/places/add`, data)
        .then(({ Query }) => {
          dispatch({ type: ADD_PLACE, payload: Query });
          resolve();
          history.push('/');
        })
        .catch((err) => {
          console.info(err);
          reject();
        });
    });
  };
}
