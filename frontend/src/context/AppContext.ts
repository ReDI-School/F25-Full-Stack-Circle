import { createContext } from 'react';

export const AppContext = createContext<{
  leftPadding: number;
  setLeftPadding: (value: number) => void;
} | null>(null);
