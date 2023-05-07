const dashUserDataReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "DashUserData":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default dashUserDataReducer;
