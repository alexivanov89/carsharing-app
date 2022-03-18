import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: null,
};

const myOrder = createSlice({
  name: 'myOrder',
  initialState,
  reducers: {
    setMyOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setMyOrder } = myOrder.actions;

export const myOrderReducer = myOrder.reducer;
