import { useEffect } from 'react';

import { useAuthContext } from '../../contexts/auth/authContext';

const Logout = () => {
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
  }, [logout]);

  return null;
};

export default Logout;
