import { apiClient } from '../axiosInstance';
import { ENDPOINTS } from '../../constants/endpoint';

const { get } = apiClient;

export const getListStaff = () => get(ENDPOINTS.LISTSTAFF);
