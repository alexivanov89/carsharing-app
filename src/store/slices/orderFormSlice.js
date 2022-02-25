import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 0,
  filledStep: -1,
  pointOfIssue: {
    city: 'Ульяновск',
    point: 'Нариманова, 42',
  },
  car: {
    model: 'Hyndai, i30 N',
    color: '',
  },
  rentalDuration: '',
  rate: '',
  additionalServices: {
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
  },
  price: {
    min: 10000,
    max: 32000,
    calculated: null,
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
    setModelCar: (state, action) => {
      state.car.model = action.payload;
    },
    setColorCar: (state, action) => {
      state.car.color = action.payload;
    },
    setRentalDuration: (state, action) => {
      state.rentalDuration = action.payload;
    },
    setRate: (state, action) => {
      state.rate = action.payload;
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
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  setCurrentStep,
  setFilledStep,
  setCity,
  setPoint,
  setModelCar,
  setColorCar,
  setRentalDuration,
  setRate,
  setFullTank,
  setBabyChair,
  setRightHandDrive,
  setPrice,
} = orderFormSlice.actions;

export const orderFormReducer = orderFormSlice.reducer;
