import axios from 'axios';
import urlFor from '../helpers/urlFor';

const addMessage = (chatMessageData, currentUser) => {
  const url = urlFor(
    "/chat_messages?api_key=" + 
    currentUser.api_key
  );

  const result = axios.post(url, chatMessageData);

  return {
    type: "ADD_MESSAGE",
    payload: result
  };
};

export default addMessage;
