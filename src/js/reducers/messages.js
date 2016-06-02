const messages = (state = [], action) => {
  switch (action.type) {
    case "SET_MESSAGES":
    return action.payload.data;
    default:
    return state;
  }
};

export default messages;
