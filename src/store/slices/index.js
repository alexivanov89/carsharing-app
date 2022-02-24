import { combineReducers } from '@reduxjs/toolkit';
import { orderFormReducer } from './orderFormSlice';

export const rootReducer = combineReducers({
  orderForm: orderFormReducer,
});
