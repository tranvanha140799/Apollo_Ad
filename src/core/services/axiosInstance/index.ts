import axios from 'axios';
import * as RequestInterceptor from '../../network/interceptors/request';
import * as ResponseInterceptor from '../../network/interceptors/response';

const BASE_URL = 'https://localhost:44300/';

const getInstance = (baseUrl: string) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
  instance.interceptors.request.use(RequestInterceptor.addAccessToken, RequestInterceptor.onRejected);
  instance.interceptors.response.use(ResponseInterceptor.onFullfilled, ResponseInterceptor.onRejected);
  return instance;
};

export const apiClient = getInstance(BASE_URL);
