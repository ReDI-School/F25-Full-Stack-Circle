import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';

import styles from './Home.module.css';
import { useNavigate } from 'react-router';

import { useConfig } from '../../hooks';
import { useEffect, useState } from 'react';
import Label from '../../components/Label/Label';

interface User {
  name: string;
  email: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([
    {
      name: 'Fabio',
      email: 'test@fabio.com',
    },
    {
      name: 'Perial',
      email: 'dperial44@gmail.com',
    },
    {
      name: 'Christheo',
      email: 'christheo.guipo@gmail.com',
    },
    {
      name: 'Marina',
      email: 'maryna.seidel@yahoo.de',
    },
    {
      name: 'Lyubomir',
      email: 'lakovski@gmail.com',
    },
    // add your name
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

      <Label type="ranking" size ='small'  ranking={2} category="TV Shows Today" />
      <Label type="ranking" size ='large' ranking={1} category="TV Shows Today" />
      <Label type="ranking" size ='large'  />
      <Label type="ranking" size ='small' />

      <Label type="status" variant="New Season" />
      <Label type="status" variant="Recently Added" />
      <Label type="status" variant="Leaving Soon" />

      <Label type="top10-icon"  />
      <div>
        {loadingUsers ? (
          <div>Redi team</div>
        ) : (
          <>
            {users.length > 0 ? (
              users.map((user) => <div key={user.name}>{user.email}</div>)
            ) : (
              <div>Finally</div>
            )}
          </>
        )}
      </div>
      <Button onClick={handleSignIn}>Sign In</Button>

    </div>
  );
};

export default Home;
