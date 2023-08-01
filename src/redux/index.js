import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from './productDetail/reducer';
import allProductReducer from './products/reducer';
import authUserReducer from './auth/reducer';
import allCategoriesReducer from './categories/reducer';
import allReportReducer from './report/reducer';

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    allProduct: allProductReducer,
    auth: authUserReducer,
    categories: allCategoriesReducer,
    report: allReportReducer,
  },
});

export default store;
