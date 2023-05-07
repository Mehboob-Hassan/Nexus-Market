const dashProfileReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "dashProfile":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default dashProfileReducer;
