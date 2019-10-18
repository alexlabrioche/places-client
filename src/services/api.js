import axios from 'axios';

export function setToken(token) {
  console.info('setToken token:', token);
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function apiCall(method, path, data) {
  console.info('path', path);
  return new Promise((resolve, reject) => {
    return axios[method](`http://localhost:5555/${path}`, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
}
