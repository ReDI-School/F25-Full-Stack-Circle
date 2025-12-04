/**
 * Authentication utility functions for managing JWT tokens
 */

const TOKEN_KEY = 'auth_token';

export interface JWTPayload {
  email: string;
  accountId: string;
}

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getToken();
  return token !== null && token.length > 0;
};
