const ENVIRONMENT = import.meta.env.VITE_VERCEL_ENV || 'development';
const API_PROJECT_ID = import.meta.env.VITE_API_PROJECT_ID;
const COMMIT_SHA = import.meta.env.VERCEL_GIT_COMMIT_SHA;
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const VERCEL_TOKEN = import.meta.env.VERCEL_TOKEN;

// Build API URL dynamically based on Vercel environment
// If the environment is preview (PR scoped), we need to get the API URL from the Vercel API otherwise use the local .env file
const getApiUrl = async (): Promise<string> => {
  if (ENVIRONMENT === 'preview') {
    try {
      const response = await fetch(
        `https://api.vercel.com/v6/deployments?projectId=${API_PROJECT_ID}&target=preview&sha=${COMMIT_SHA}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
          },
        }
      );

      const data = await response.json();

      return data.deployments[0].url;
    } catch (error) {
      console.error(error);

      return API_URL;
    }
  }

  return API_URL;
};

export const config = async (): Promise<{
  environment: string;
  apiUrl: string;
}> => {
  return {
    environment: ENVIRONMENT,
    apiUrl: await getApiUrl(),
  };
};
