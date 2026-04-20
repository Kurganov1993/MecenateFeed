import axios from 'axios';
import { API_BASE_URL } from '@env';
import { USER_UUID } from '../utils/auth';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${USER_UUID}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);