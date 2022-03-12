import { apiClient } from './apiClient';

export const tableService = {
  getCity: () => apiClient().get('/db/city'),
  getCityById: (dataId) => apiClient().get(`/db/city/${dataId}`),
  getPoint: () => apiClient().get('/db/point'),
  getPointById: (dataId) => apiClient().get(`/db/point/${dataId}`),
  getCar: (options = '') => apiClient().get(`/db/car${options}`),
  getCarById: (dataId) => apiClient().get(`/db/car/${dataId}`),
  getCategory: () => apiClient().get('/db/category'),
  getRate: () => apiClient().get('/db/rate'),
};
