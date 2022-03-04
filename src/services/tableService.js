import { apiClient } from './apiClient';

export const tableService = {
  getCity: () => apiClient().get('/db/city'),
  getCityById: (data_id) => apiClient().get(`/db/city/${data_id}`),
  getPoint: () => apiClient().get('/db/point'),
  getPointById: (data_id) => apiClient().get(`/db/point/${data_id}`),
  getCar: (options = '') => apiClient().get(`/db/car${options}`),
  getCarById: (data_id) => apiClient().get(`/db/car/${data_id}`),
  getCategory: () => apiClient().get('/db/category'),
  getRate: () => apiClient().get('/db/rate'),
};
