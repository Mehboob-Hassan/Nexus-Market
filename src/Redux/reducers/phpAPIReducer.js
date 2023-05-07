const phpAPIReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GetProjects":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default phpAPIReducer;
