import { Button } from '../../components';
import { UserIcon } from '../../components/UserIcon';
import type { Profile, ProfilesProps } from './Profiles.types';

import styles from './Profiles.module.css';

const profiles: Profile[] = [
  { id: '1', name: 'ReDi', avatar: '01' },
  { id: '2', name: 'Koubrse', avatar: '02' },
  { id: '3', name: 'Chikas', avatar: '03' },
];

const Profiles = ({ onProfileClick }: ProfilesProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who's watching?</h1>
      <ul className={styles.list}>
        {profiles.map((profile) => (
          <li key={profile.id} className={styles.item}>
            <UserIcon userName={profile.name} avatar={profile.avatar} onClick={onProfileClick} />
          </li>
        ))}
        <UserIcon userName="Add Profile" avatar="47" />
      </ul>
      <Button variant="outlined"> Manage Profiles</Button>
    </div>
  );
};

export default Profiles;
