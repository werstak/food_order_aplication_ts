import axios from 'axios';

export const API_URL = '';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

let refreshToken: string;

export const setAuthHeader = (accessToken: string): void => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const resetAuthHeader = (): void => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export const setRefreshToken = (token: string): void => {
  refreshToken = token;
};

export const resetRefreshToken = (): void => {
  refreshToken = '';
};

export default axiosInstance;
