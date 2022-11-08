import axios from 'axios';
import env from 'react-dotenv';

const get = url => {
  return axios.get(`${env.API_URL}${url}`);
}

const post = (url, payload) => {
  return axios.post(`${env.API_URL}${url}`, payload);
}

export {
  get,
  post,
}