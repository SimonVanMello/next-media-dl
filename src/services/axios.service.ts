import _axios from 'axios';

const axios = _axios.create({
  baseURL: '/api',
});

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default axios;
