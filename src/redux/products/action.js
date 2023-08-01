import api from '../../utils/api';

const ActionType = {
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  POST_PRODUCT: 'POST_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
};

const getAllProducts = products => ({
  type: ActionType.GET_ALL_PRODUCTS,
  payload: { products },
});

const postProduct = product => ({
  type: ActionType.POST_PRODUCT,
  payload: { product },
});

const deleteProduct = id => ({
  type: ActionType.DELETE_PRODUCT,
  payload: { id },
});

const asyncGetAllProducts = () => async dispatch => {
  try {
    const products = await api.seeAllProducts();
    dispatch(getAllProducts(products));
  } catch (error) {
    console.log(error);
  }
};

const asyncPostProduct = product => async dispatch => {
  try {
    const newProduct = await api.createProduct(product);
    dispatch(postProduct(newProduct));
  } catch (error) {
    console.log(error);
  }
};

const asyncDeleteProduct = id => async dispatch => {
  try {
    await api.deleteProduct(id);
    dispatch(deleteProduct(id));
  } catch (error) {
    console.log(error);
  }
};

export {
  ActionType,
  asyncGetAllProducts,
  asyncPostProduct,
  asyncDeleteProduct,
};
