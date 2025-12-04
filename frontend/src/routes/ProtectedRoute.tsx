import { Navigate } from 'react-router';

import { useAuth } from '../hooks/useAuth';
import { routePaths } from './routePaths';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={routePaths.signIn().path} replace />;
  }

  return <>{children}</>;
};
