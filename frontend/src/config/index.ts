const environment = import.meta.env.VITE_VERCEL_ENV || 'development';

// Build API URL dynamically based on Vercel environment
const buildApiUrl = (): string => {
  if (environment === 'preview') {
    const branchUrl = import.meta.env.VITE_VERCEL_BRANCH_URL;

    if (branchUrl) {
      const urlParts = branchUrl.split('-git-');

      if (urlParts.length > 1) {
        const branchPart = urlParts[1];
        const domainPart = branchUrl.split('.vercel.app')[0];
        const projectPart = domainPart.split('-git-')[0];

        // Construct the API URL with the correct branch
        return `https://${projectPart}-api-git-${branchPart}.vercel.app`;
      }
    }
  }

  return import.meta.env.VITE_API_URL || 'http://localhost:4000';
};

export const config = {
  environment,
  apiUrl: buildApiUrl(),
};
