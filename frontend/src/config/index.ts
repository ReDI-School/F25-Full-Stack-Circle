const environment = process.env.VERCEL_ENV || 'development';

export const config = {
  environment,
  apiUrl: import.meta.env.VITE_API_URL,
};
