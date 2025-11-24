export const routePaths = {
  landingPage: () => ({ label: 'Landing Page', path: '/' }),
  shows: () => ({ label: 'TV Shows', path: '/shows' }),
  news: () => ({ label: 'News & Popular', path: '/news' }),
  myList: () => ({ label: 'My List', path: '/list' }),
  language: () => ({ label: 'Browse By Language', path: '/language' }),
  signIn: () => ({ label: 'Sign In', path: '/signin' }),
  signUp: () => ({ label: 'Sign Up', path: '/signup' }),
  browse: () => ({ label: 'Browse', path: '/browse' }),
};

export const authRoutes = [routePaths.signIn().path, routePaths.signUp().path];

const hiddenNavItems = new Set([...authRoutes, routePaths.landingPage().path]);

export const navigationItems = Object.entries(routePaths)
  .filter(([, getRoute]) => !hiddenNavItems.has(getRoute().path))
  .map(([, getRoute]) => ({
    label: getRoute().label,
    path: getRoute().path,
  }));
