import { AxiosRequestParams, defaultAxios, request } from './axiosUtils';

export default async <T>({
  method,
  url,
  queryParams,
  requestBody,
  headers,
}: AxiosRequestParams) => {
  const instance = defaultAxios.getInstance();
  return request<T>(instance, method, url, queryParams, requestBody, headers);
};
