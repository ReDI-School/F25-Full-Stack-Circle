import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';

import styles from './Home.module.css';
import { useNavigate } from 'react-router';

import { useConfig } from '../../hooks';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id:'ha',
      name: 'Hanin',
      email: 'test@hanin.com',
    },
  ]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const { config, loadingConfig } = useConfig();

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (loadingConfig || loadingUsers) return;

      const response = await fetch(`${config?.apiUrl}/users`);
      const data = await response.json();
      setUsers(data.users);
      setLoadingUsers(false);
    };

    fetchUsers();
  }, [config, loadingConfig, loadingUsers]);

  return (
    <div className={styles.home}>
      <img src={logo} alt="Rediflix Logo" width={500} />
      <div>
        {loadingUsers ? (
          <div>Loading users...</div>
        ) : (
          <>
            {users.length > 0 ? (
              users.map((user) => <div key={user.name}>{user.email}</div>)
            ) : (
              <div>No users found</div>
            )}
          </>
        )}
      </div>
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Home;
