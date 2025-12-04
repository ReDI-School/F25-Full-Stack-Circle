export const routePaths = {
  landingPage: () => ({ label: 'Landing Page', path: '/' }),
  home: () => ({ label: 'Home', path: '/browse' }),
  shows: () => ({ label: 'TV Shows', path: '/shows' }),
  news: () => ({ label: 'News & Popular', path: '/news' }),
  myList: () => ({ label: 'My List', path: '/list' }),
  language: () => ({ label: 'Browse By Language', path: '/language' }),
  signIn: () => ({ label: 'Sign In', path: '/signin' }),
  signUp: () => ({ label: 'Sign Up', path: '/signup' }),
  activePlayer: () => ({ label: 'Active Player', path: '/videos/:id' }),
};

export const authRoutes = [routePaths.signIn().path, routePaths.signUp().path];

const hiddenNavItems = new Set([...authRoutes, routePaths.landingPage().path]);
const protectedRoutes = Object.entries(routePaths).filter(
  ([, getRoute]) => !hiddenNavItems.has(getRoute().path)
);
export const navigationItems = protectedRoutes.map(([, getRoute]) => ({
  label: getRoute().label,
  path: getRoute().path,
}));
