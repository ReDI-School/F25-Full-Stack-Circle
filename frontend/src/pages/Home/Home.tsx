import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Button, Modal } from '../../components';
import { useStateToggleHandlers } from '../../hooks';
import WhoIsWatching from '../Profiles/WhoIsWatching';

import type { User } from '../../config/user.types';
import { userAPI } from '../../config/usersAPI';
import { useUsers } from '../../hooks/useUsers';

import styles from './Home.module.css';

const Home = () => {
  const { users, isLoading, error } = useUsers();
  const navigate = useNavigate();

  const [isModalOpen, , closeModal] = useStateToggleHandlers(true); //TODO: Show only after sign in

  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [creating, setCreating] = useState(false);

  const handleSignIn = () => {
    navigate('/signin');
  };

  const accountId = 'cmhawq6mp000001q7jzr3ikbl';
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Email and password are required');
      return;
    }

    try {
      setCreating(true);
      const newUser = await userAPI.create({
        ...formData,
        accountId,
      });

      console.log('Created new user: ', newUser);

      setFormData({ name: '', email: '', password: '' });
    } catch (err) {
      console.error('Error creating user:', err);
      alert('Failed to create user');
    } finally {
      setCreating(false);
    }
  };

  return (
    <>
      <div className={styles.home}>
        <div>
          {isLoading && <div>IsLoading users...</div>}
          {error && <div>Error fetching users</div>}
          {!isLoading && !error && (
            <>
              {users?.length ? (
                users.map(({ id, name, email }: User) => <div key={id || name}>{email}</div>)
              ) : (
                <div>No users found</div>
              )}
            </>
          )}
        </div>
        <form onSubmit={handleCreateUser} style={{ marginTop: 20 }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Button type="submit" disabled={creating}>
            {creating ? 'Creating...' : 'Create User'}
          </Button>
        </form>
        <Button onClick={handleSignIn}>Sign In</Button>
      </div>
      <Modal isOpen={isModalOpen}>
        <WhoIsWatching onUserClick={closeModal} />
      </Modal>
    </>
  );
};

export default Home;
