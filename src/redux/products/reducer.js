import { ActionType } from './action';

const allProductReducer = (state, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_PRODUCTS:
      return action.payload.products;
    case ActionType.POST_PRODUCT:
      return [...state, action.payload.product];
    case ActionType.DELETE_PRODUCT:
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state || [];
  }
};

export default allProductReducer;
