import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tableService } from '../../services/tableService';

const initialState = {
  order: {
    cityId: {
      name: '',
      id: null,
    },
    pointId: {
      address: '',
      name: '',
      id: null,
    },
    carId: {
      description: '',
      priceMin: 0,
      priceMax: 0,
      name: '',
      number: '',
      categoryId: {
        name: '',
        description: '',
        id: null,
      },
      thumbnail: {},
      tank: null,
      colors: [],
      id: null,
    },
    dateTo: null,
    dateFrom: null,
    rateId: {
      id: null,
      price: 0,
      rateTypeId: {
        unit: '',
        name: '',
        id: '',
      },
    },
    orderStatusId: null,
    color: '',
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
  loading: false,
  error: false,
};

export const fetchOrderAsync = createAsyncThunk('table/fetchCity', async (id) => {
  const response = await tableService.getOrderById(id);
  return response.data.data;
});

const myOrder = createSlice({
  name: 'myOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.order = action.payload;
      })
      .addCase(fetchOrderAsync.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const myOrderReducer = myOrder.reducer;
