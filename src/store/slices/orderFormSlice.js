import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 0,
  filledStep: -1,
  pointOfIssue: {
    city: {
      label: '',
      value: null,
    },
    point: {
      label: '',
      value: null,
      name: '',
    },
  },
  carOrder: {
    color: '',
    car: {
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
  },
  dateTo: null,
  dateFrom: null,
  rentalDuration: {
    label: '',
    value: null,
  },
  rateOrder: {
    id: null,
    price: 0,
    rateTypeId: {
      unit: '',
      name: '',
      id: '',
    },
  },
  additionalServices: {
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
  },
  price: {
    min: null,
    max: null,
    calculated: null,
  },
  orderStatus: {
    name: '',
    id: null,
  },
};

const orderFormSlice = createSlice({
  name: 'orderForm',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setFilledStep: (state, action) => {
      state.filledStep = action.payload;
    },
    setCity: (state, action) => {
      state.pointOfIssue.city = action.payload;
    },
    setPoint: (state, action) => {
      state.pointOfIssue.point = action.payload;
    },
    setCar: (state, action) => {
      state.carOrder.car = action.payload;
    },
    setColorCar: (state, action) => {
      state.carOrder.color = action.payload;
    },
    setRentalDuration: (state, action) => {
      state.rentalDuration = action.payload;
    },
    setDateTo: (state, action) => {
      state.dateTo = action.payload;
    },
    setDateFrom: (state, action) => {
      state.dateFrom = action.payload;
    },
    setRateOrder: (state, action) => {
      state.rateOrder = action.payload;
    },
    setFullTank: (state, action) => {
      state.additionalServices.fullTank = action.payload;
    },
    setBabyChair: (state, action) => {
      state.additionalServices.babyChair = action.payload;
    },
    setRightHandDrive: (state, action) => {
      state.additionalServices.rightHandDrive = action.payload;
    },
    setPriceMin: (state, action) => {
      state.price.min = action.payload;
    },
    setPriceMax: (state, action) => {
      state.price.max = action.payload;
    },
    setPriceCalculated: (state, action) => {
      state.price.calculated = action.payload;
    },
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    },
  },
});

export const {
  setCurrentStep,
  setFilledStep,
  setCity,
  setPoint,
  setCar,
  setColorCar,
  setRentalDuration,
  setDateTo,
  setDateFrom,
  setRateOrder,
  setFullTank,
  setBabyChair,
  setRightHandDrive,
  setPriceMin,
  setPriceMax,
  setPriceCalculated,
  setOrderStatus,
} = orderFormSlice.actions;

export const orderFormReducer = orderFormSlice.reducer;
