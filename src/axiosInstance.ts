import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://645644b92e41ccf16918360b.mockapi.io',
  timeout: 1000,
  headers: {
    Authorization: 'this is secrect key'
  }
});

instance.interceptors.request.use(async (config) => {
  // do something
  config.headers.Authorization = 'test token'
  return config;
})