export type RouteConfig = {
  label: string;
  path: string;
  isPrivate?: boolean;
  isHiddenFromNav?: boolean;
  isAuth?: boolean;
};

export type RouteKey =
  | 'landingPage'
  | 'signIn'
  | 'signUp'
  | 'home'
  | 'shows'
  | 'news'
  | 'myList'
  | 'language'
  | 'logout';

export type RoutePaths = {
  [K in RouteKey]: () => RouteConfig;
};

export const routesConfig: Record<RouteKey, Omit<RouteConfig, 'element'>> = {
  landingPage: {
    label: 'Landing Page',
    path: '/',
    isHiddenFromNav: true,
  },
  signIn: {
    label: 'Sign In',
    path: '/signin',
    isHiddenFromNav: true,
    isAuth: true,
  },
  signUp: {
    label: 'Sign Up',
    path: '/signup',
    isHiddenFromNav: true,
    isAuth: true,
  },
  home: {
    label: 'Home',
    path: '/home',
    isPrivate: true,
  },
  shows: {
    label: 'TV Shows',
    path: '/shows',
    isPrivate: true,
  },
  news: {
    label: 'News & Popular',
    path: '/news',
    isPrivate: true,
  },
  myList: {
    label: 'My List',
    path: '/list',
    isPrivate: true,
  },
  language: {
    label: 'Browse By Language',
    path: '/language',
    isPrivate: true,
  },
  logout: {
    label: 'Logout',
    path: '/logout',
    isHiddenFromNav: true,
    isAuth: true,
  },
};

export const routePaths: RoutePaths = Object.entries(routesConfig).reduce((acc, [key, config]) => {
  acc[key as RouteKey] = () => config as RouteConfig;
  return acc;
}, {} as RoutePaths);

export const authRoutes = Object.entries(routesConfig)
  .filter(([, config]) => config.isAuth)
  .map(([, config]) => config.path);

export const navigationItems = Object.values(routesConfig)
  .filter((config) => !config.isHiddenFromNav)
  .map((config) => ({
    label: config.label,
    path: config.path,
  }));
