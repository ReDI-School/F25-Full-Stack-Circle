import { Navigate } from 'react-router';

import { useAuthContext } from '../contexts/auth/authContext';
import { routePaths } from './routePaths';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return <div>Loading...</div>; //TODO: add loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to={routePaths.signIn().path} replace />;
  }

  return <>{children}</>;
};
