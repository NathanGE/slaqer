import axios from 'axios';
import urlFor from '../helpers/urlFor';

const loadMessages = () => {
  const url = urlFor("/chat_messages");
  const result = axios.get(url);

  return {
    type: "SET_MESSAGES",
    payload: result
  }
};

export default loadMessages;
