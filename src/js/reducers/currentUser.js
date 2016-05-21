const currentUser = (state = {}, action) => {
  switch(action.type) {
    case "LOAD_CURRENT_USER":
    return action.payload.data;
    default:
    return state;
  }
}

export default currentUser;
