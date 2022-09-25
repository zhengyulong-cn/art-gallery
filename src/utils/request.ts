import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(config => {
  // 添加 icode
  config.headers.icode = '14C46EAB1DFA6EBA'
  // 必须返回 config
  return config
})

service.interceptors.response.use(response => {
  const { data, message, success } = response.data;
  if (success) {
    return Promise.resolve(data);
  }
  // TODO: 错误情况
  return Promise.reject(new Error(message));
})

const httpRequest = (url: string, requestMethod: 'get' | 'post', params?: any, config?: Record<keyof AxiosRequestConfig, any>):Promise<any> => {
  return service(url, {
    method: requestMethod,
    params,
    ...config,
  })
}
export default httpRequest;