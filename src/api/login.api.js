import { API_URL_LOGIN } from '../infra/endpoints';
import { post } from '../infra/http-client';

const login = ({email, password}) => {
  return post(API_URL_LOGIN, {email, password});
}

export {
  login,
}