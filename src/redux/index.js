import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from './productDetail/reducer';
import allProductReducer from './products/reducer';
import authUserReducer from './auth/reducer';
import allCategoriesReducer from './categories/reducer';
import allReportReducer from './report/reducer';
import allProfileReducer from './profile/reducer';

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    allProduct: allProductReducer,
    auth: authUserReducer,
    categories: allCategoriesReducer,
    report: allReportReducer,
    profile: allProfileReducer,
  },
});

export default store;
