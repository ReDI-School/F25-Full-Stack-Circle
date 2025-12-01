import { Button } from '../../components';
import { UserIcon } from '../../components/UserIcon';
import type { User, WhoIsWatchingProps } from './WhoIsWatching.types';

import styles from './WhoIsWatching.module.css';

const users: User[] = [
  { id: '1', name: 'Ahmad', avatar: '01' },
  { id: '2', name: 'Koubrse', avatar: '02' },
  { id: '3', name: 'Chikas', avatar: '03' },
];

const WhoIsWatching = ({ onUserClick }: WhoIsWatchingProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who's watching?</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.item}>
            <UserIcon userName={user.name} avatar={user.avatar} onClick={onUserClick} />
          </li>
        ))}
        <UserIcon userName="Add Profile" avatar="47" />
      </ul>
      <Button variant="outlined"> Manage Profiles</Button>
    </div>
  );
};

export default WhoIsWatching;
