const environment = process.env.VERCEL_ENV || 'development';

// Build API URL dynamically based on Vercel environment
const buildApiUrl = (): string => {
  if (environment === 'preview') {
    const branchUrl = process.env.VERCEL_BRANCH_URL;

    if (branchUrl) {
      return `https://${branchUrl.replace('rediflix', 'rediflix-api')}`;
    }
  }

  return import.meta.env.VITE_API_URL || 'http://localhost:4000';
};

export const config = {
  environment,
  apiUrl: buildApiUrl(),
};
