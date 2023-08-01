import { ActionType } from './action';

const allCategoriesReducer = (state, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_CATEGORY:
      return action.payload.category;
    default:
      return state || [];
  }
};

export default allCategoriesReducer;
