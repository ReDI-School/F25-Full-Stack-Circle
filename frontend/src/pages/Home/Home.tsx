import { useNavigate } from 'react-router';

import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';
import { NavigationMenu } from '../../components/NavigationMenu';
import { useUsers } from '../../hooks/useUsers';
import type { User } from '../../config/user.types';

import styles from './Home.module.css';

const Home = () => {
  const { users, loading, error } = useUsers();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className={styles.home}>
      <NavigationMenu />
      <img src={logo} alt="Rediflix Logo" width={500} />
      <div>
        {loading && <div>Loading users...</div>}
        {error && <div>Error fetching users</div>}
        {!loading && !error && (
          <>
            {users?.length ? (
              users.map((user: User) => <div key={user.id || user.name}>{user.email}</div>)
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
