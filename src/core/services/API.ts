import { apiClient } from './axiosInstance';
import { ENDPOINTS } from '../constants/endpoint';

const { get } = apiClient;

export const slk_all = (params: {}) => get(ENDPOINTS.SLK_ALL, params);
