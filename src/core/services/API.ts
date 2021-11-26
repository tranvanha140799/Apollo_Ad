import { apiClient } from './axiosInstance';
import { ENDPOINTS } from '../constants/endpoint';

const { get, post } = apiClient;

export const slk_all = (date: string) => get(ENDPOINTS.SLK_ALL + `?date=${date}`);
export const slk_thang = (date: string) => get(`${ENDPOINTS.SLK}/thang?date=${date}`);
export const getListSanPham = (pageIndex?: number, pageSize?: number) =>
  get(`${ENDPOINTS.SANPHAM}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
export const getSanPham = (id: string) => get(`${ENDPOINTS.SANPHAM}/${id}`);
export const getSanPhamNDK = (date: string) => get(`${ENDPOINTS.SANPHAM}/${date}`);
export const editSanPham = (params: object, id: string) => post(`${ENDPOINTS.SANPHAM}/edit/${id}`, params);
export const addSanPham = (params: object) => post(`${ENDPOINTS.SANPHAM}/InsertProduct`, params);
export const deleteSanPham = (id: string) => apiClient.delete(`${ENDPOINTS.SANPHAM}/delete/${id}`);
