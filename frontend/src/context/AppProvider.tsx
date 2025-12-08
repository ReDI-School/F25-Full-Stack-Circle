import { useState } from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [leftPadding, setLeftPadding] = useState(0);

  return (
    <AppContext.Provider value={{ leftPadding, setLeftPadding }}>{children}</AppContext.Provider>
  );
};
