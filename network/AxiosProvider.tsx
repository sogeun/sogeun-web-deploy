import React, { ReactNode } from 'react';
import { useAuthState } from '~/context/auth';
import { defaultAxios } from './axiosUtils';

interface AxiosProviderProps {
  children: ReactNode;
}

const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const { token } = useAuthState();
  const defaultInstance = defaultAxios.getInstance();
  defaultInstance.interceptors.request.use(
    async (config) => {
      console.log(token);
      if (token) {
        // @ts-ignore
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  defaultInstance.interceptors.response.use(
    async (response) => response,
    async (e) => {
      return Promise.reject(e);
    },
  );
  return <>{children}</>;
};

export default AxiosProvider;
