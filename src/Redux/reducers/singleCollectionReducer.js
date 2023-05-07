const singleCollectionReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "SingleCollection":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default singleCollectionReducer;
