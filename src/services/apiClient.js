import axios from 'axios';
import { API_KEY, API_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: { 'X-Api-Factory-Application-Id': API_KEY },
});

export const apiClient = () => {
  return axiosInstance;
};
