import axios from 'axios';
import env from 'react-dotenv';

const customHeaders = () => {
  const storage = localStorage.getItem('user');
  let token = '';

  if (storage) {
    const user = JSON.parse(storage);
    token = user.token;
  }

  return {
    'Authorization': `Bearer ${token}`,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
}

const get = (url, params = {}) => {
  const headers = customHeaders();

  return axios({
    baseURL: env.API_URL,
    url,
    method: 'get',
    headers,
    params,
  });
}

const post = (url, data = {}) => {
  const headers = customHeaders();

  return axios({
    baseURL: env.API_URL,
    url,
    method: 'post',
    headers,
    data,
  });
}

export {
  get,
  post,
}