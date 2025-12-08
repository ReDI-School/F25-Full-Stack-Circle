import { useEffect, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { authAPI, type LoginPayload, type SignUpPayload } from '../../api/auth/authAPI';
import { routePaths } from '../../routes/routePaths';
import { isAuthenticated, removeToken, type JWTPayload } from '../../utils/auth';
import { AuthContext, type AuthContextType } from './authContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [account, setAccount] = useState<JWTPayload | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      if (isAuthenticated()) {
        const verified = await authAPI.verifyToken();
        if (verified) {
          setAccount(verified);
        } else {
          removeToken();
          setAccount(null);
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (data: LoginPayload) => {
    try {
      const { account } = await authAPI.login(data);

      setAccount(account);

      navigate(routePaths.home().path);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signUp = async (data: SignUpPayload) => {
    try {
      const { account } = await authAPI.signUp(data);

      setAccount(account);

      navigate(routePaths.home().path);
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const logout = () => {
    authAPI.logout();

    setAccount(null);

    navigate(routePaths.signIn().path);
  };

  const value: AuthContextType = {
    account,
    isAuthenticated: account !== null,
    isLoading,
    login,
    signUp,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
