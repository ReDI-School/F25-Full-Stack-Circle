import type { RouteObject } from 'react-router';

import ActivePlayer from '../pages/ActivePlayer/ActivePlayer.tsx';
import BrowseByLanguage from '../pages/Browse/BrowseByLanguage.tsx';
import Home from '../pages/Home/Home.tsx';
import LandingPage from '../pages/Landing/Landing.tsx';
import Logout from '../pages/Logout/Logout.tsx';
import MyList from '../pages/MyList/MyList.tsx';
import News from '../pages/News/News.tsx';
import Shows from '../pages/Shows/Shows.tsx';
import SignIn from '../pages/SignIn/SignIn.tsx';
import SignUp from '../pages/SignUp/SignUp.tsx';
import { ProtectedRoute } from './ProtectedRoute';
import { routesConfig } from './routePaths';

const routeComponents: Record<keyof typeof routesConfig, React.ReactElement> = {
  landingPage: <LandingPage />,
  signIn: <SignIn />,
  signUp: <SignUp />,
  home: <Home />,
  shows: <Shows />,
  news: <News />,
  myList: <MyList />,
  language: <BrowseByLanguage />,
  activePlayer: <ActivePlayer />,
  logout: <Logout />,
};

// Helper function to create a route with optional protection
const createRoute = (key: keyof typeof routesConfig): RouteObject => {
  const config = routesConfig[key];
  const element = routeComponents[key];

  return {
    path: config.path,
    element: config.isPrivate ? <ProtectedRoute>{element}</ProtectedRoute> : element,
  };
};

export const routes: RouteObject[] = Object.keys(routesConfig).map((key) =>
  createRoute(key as keyof typeof routesConfig)
);
