import { ActionType } from "./action";

function productDetailReducer(state = {}, action) {
  switch (action.type) {
    case ActionType.GET_PRODUCT_DETAIL:
      return action.payload.productDetail;
    default:
      return state || null;
  }
}

export default productDetailReducer;
