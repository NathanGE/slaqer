const users = (state = [], action) => {
  switch(action.type) {
    case "SET_USERS":
    return action.payload.data;
    default:
    return state;
  }
};

export default users;
