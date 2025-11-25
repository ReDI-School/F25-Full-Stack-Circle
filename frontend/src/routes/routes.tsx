import type { RouteObject } from 'react-router';

import LandingPage from '../pages/Landing/Landing.tsx';
import SignIn from '../pages/SignIn/SignIn.tsx';
import SignUp from '../pages/SignUp/SignUp.tsx';
import { routePaths } from './routePaths';

export const routes: RouteObject[] = [
  {
    path: routePaths.landingPage().path,
    element: <LandingPage />,
  },
  {
    path: routePaths.signIn().path,
    element: <SignIn />,
  },
  {
    path: routePaths.signUp().path,
    element: <SignUp />,
  },
];
