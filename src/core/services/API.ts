import { apiClient } from './axiosInstance';
import { ENDPOINTS } from '../constants/endpoint';

const { get } = apiClient;

export const slk_all = (date: string) => get(ENDPOINTS.SLK_ALL + `?date=${date}`);
export const slk_thang = (date: string) => get(`${ENDPOINTS.SLK}/thang?date=${date}`);
export const getListSanPham = (pageIndex?: number, pageSize?: number) =>
  get(`${ENDPOINTS.SANPHAM}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
export const getSanPham = (id: string) => get(`${ENDPOINTS.SANPHAM}/${id}`);
export const getSanPhamNDK = () => get(ENDPOINTS.SANPHAM_NDK);
