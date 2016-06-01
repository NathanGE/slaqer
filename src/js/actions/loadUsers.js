import axios from 'axios';
import urlFor from '../helpers/urlFor';

const loadUsers = () => {
  const url = urlFor("/users");
  const result = axios.get(url);

  return {
    type: "SET_USERS",
    payload: result
  };
};

export default loadUsers;
