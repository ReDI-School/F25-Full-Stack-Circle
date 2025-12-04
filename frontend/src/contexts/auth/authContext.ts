import { createContext } from 'react';

import type { LoginPayload, SignUpPayload } from '../../api/auth/authAPI';
import type { JWTPayload } from '../../utils/auth';

export interface AuthContextType {
  account: JWTPayload | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginPayload) => Promise<void>;
  signUp: (data: SignUpPayload) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
