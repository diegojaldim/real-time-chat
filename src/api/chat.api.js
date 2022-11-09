import { API_URL_USERS } from '../infra/endpoints';
import { get } from '../infra/http-client';

const listUsers = () => {
  return get(API_URL_USERS);
};

export {
  listUsers
};