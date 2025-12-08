import axios from 'axios';

import { getToken, removeToken, setToken, type JWTPayload } from '../../utils/auth';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle 401 responses (unauthorized) - clear token and redirect
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeToken();

      if (window.location.pathname !== '/signin') {
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  account: JWTPayload;
}

export interface SignUpPayload {
  email: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
  account: JWTPayload;
}

/**
 * Authentication API
 */
export const authAPI = {
  login: async (data: LoginPayload) => {
    const response = await api.post<{ token: string; account: JWTPayload }>('/auth/login', data);
    const { token, account } = response.data;

    setToken(token);

    return { token, account };
  },
  signUp: async (data: SignUpPayload) => {
    const response = await api.post<{ token: string; account: JWTPayload }>('/auth/signup', data);
    const { token, account } = response.data;

    setToken(token);

    return { token, account };
  },
  logout: () => {
    removeToken();
  },
  verifyToken: async () => {
    try {
      const response = await api.get<{ account: JWTPayload }>('/auth/verify');

      return response.data.account;
    } catch {
      removeToken();
      return null;
    }
  },
};
