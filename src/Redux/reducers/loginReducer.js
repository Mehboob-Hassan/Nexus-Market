const loginReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "loginByAddress":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
