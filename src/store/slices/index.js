import { combineReducers } from '@reduxjs/toolkit';
import { myOrderReducer } from './myOrder';
import { orderFormReducer } from './orderFormSlice';
import { tableReducer } from './tableSlice';

export const rootReducer = combineReducers({
  orderForm: orderFormReducer,
  table: tableReducer,
  myOrder: myOrderReducer,
});
