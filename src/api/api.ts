import axios, { AxiosRequestConfig } from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const lang = 'pt_br';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
});

const addAppIdRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    ...config,
    params: {
      ...config.params,
      appid: apiKey,
      lang,
    },
  };
};

api.interceptors.request.use(addAppIdRequest);

export default api;
