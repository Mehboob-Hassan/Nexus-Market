const getAllCollectionReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "AllCollection":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default getAllCollectionReducer;
