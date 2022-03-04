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
    },
  },
  carOrder: {
    carName: '',
    colors: [],
    color: '',
    carId: null,
    categoryId: '',
    stateNumberCar: '',
    carImage: null,
  },
  rentalDuration: '',
  rateOrder: {
    name: '',
    id: null,
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
    setNameCar: (state, action) => {
      state.carOrder.carName = action.payload;
    },
    setStateNumberCar: (state, action) => {
      state.carOrder.stateNumberCar = action.payload;
    },
    setCarImage: (state, action) => {
      state.carOrder.carImage = action.payload;
    },
    setCarId: (state, action) => {
      state.carOrder.carId = action.payload;
    },
    setColorsCar: (state, action) => {
      state.carOrder.colors = action.payload;
    },
    setColorCar: (state, action) => {
      state.carOrder.color = action.payload;
    },
    setCategoryId: (state, action) => {
      state.carOrder.categoryId = action.payload;
    },
    setRentalDuration: (state, action) => {
      state.rentalDuration = action.payload;
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
  setNameCar,
  setStateNumberCar,
  setCarImage,
  setColorsCar,
  setColorCar,
  setCarId,
  setCategoryId,
  setRentalDuration,
  setRateOrder,
  setFullTank,
  setBabyChair,
  setRightHandDrive,
  setPrice,
} = orderFormSlice.actions;

export const orderFormReducer = orderFormSlice.reducer;
