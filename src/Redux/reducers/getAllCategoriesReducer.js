const getAllCategoriesReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GetAllCategories":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default getAllCategoriesReducer;
