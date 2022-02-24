import { apiClient } from './apiClient';

export const tableService = {
  getCity: () => apiClient().get('/db/city'),
  getCityById: (data_id) => apiClient().get(`/db/city/${data_id}`),
  getPoint: () => apiClient().get('/db/point'),
  getPointById: (data_id) => apiClient().get(`/db/point/${data_id}`),
};
