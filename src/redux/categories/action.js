import api from '../../utils/api';

const ActionType = {
  GET_ALL_CATEGORY: 'GET_ALL_CATEGORY',
};

const getAllCategories = category => ({
  type: ActionType.GET_ALL_CATEGORY,
  payload: { category },
});

const asyncGetAllCategories = () => async dispatch => {
  try {
    const products = await api.seeAllCategories();
    dispatch(getAllCategories(products));
  } catch (error) {
    console.log(error);
  }
};

export { ActionType, asyncGetAllCategories };
