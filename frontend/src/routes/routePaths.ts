export type RouteConfig = {
  label: string;
  path: string;
  isAuth?: boolean;
  isHiddenFromNav?: boolean;
};

export type RoutePaths = {
  [K in RouteKey]: () => RouteConfig;
};

export type RouteKey =
  | 'landingPage'
  | 'shows'
  | 'news'
  | 'myList'
  | 'language'
  | 'signIn'
  | 'signUp'
  | 'browse';

const routeConfigs: Record<RouteKey, Omit<RouteConfig, 'element'>> = {
  landingPage: { label: 'Landing Page', path: '/', isHiddenFromNav: true },
  shows: { label: 'TV Shows', path: 'shows' },
  news: { label: 'News & Popular', path: 'news' },
  myList: { label: 'My List', path: 'list' },
  language: { label: 'Browse By Language', path: 'language' },
  signIn: { label: 'Sign In', path: 'signin', isAuth: true, isHiddenFromNav: true },
  signUp: { label: 'Sign Up', path: 'signup', isAuth: true, isHiddenFromNav: true },
  browse: { label: 'Browse', path: 'browse' },
};

export const routePaths: RoutePaths = Object.entries(routeConfigs).reduce((acc, [key, config]) => {
  acc[key as RouteKey] = () => config as RouteConfig;
  return acc;
}, {} as RoutePaths);

export const authRoutes = Object.entries(routeConfigs)
  .filter(([, config]) => config.isAuth)
  .map(([, config]) => config.path);

export const navigationItems = Object.values(routeConfigs)
  .filter((config) => !config.isHiddenFromNav)
  .map((config) => ({
    label: config.label,
    path: config.path,
  }));
