import api from "../../utils/api";

const ActionType = {
  GET_PRODUCT_DETAIL: "GET_PRODUCT_DETAIL",
};

const getProductDetail = (productDetail) => ({
  type: ActionType.GET_PRODUCT_DETAIL,
  payload: { productDetail },
});

const asyncGetProductDetail = (id) => async (dispatch) => {
  try {
    const productDetail = await api.seeDetailProduct(id);
    dispatch(getProductDetail(productDetail));
  } catch (error) {
    console.log(error);
  }
};

export { ActionType, asyncGetProductDetail };
