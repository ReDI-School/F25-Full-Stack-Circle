import RediflixLogo from '../../assets/images/logo.svg';
import { languagesMap } from '../../constants/languages';
import Button from '../Button/Button';
import { NavigationMenu } from '../NavigationMenu';
import Select from '../Select/Select';
import type { HeaderProps } from './Header.types';

import styles from './Header.module.css';

export const Header = ({ type }: HeaderProps) => {
  const isPrivate = type === 'private';
  const isPublic = type === 'public';

  const selectOptions = Object.entries(languagesMap).map(([value, label]) => ({
    value,
    label,
  }));

  return (
    <header className={styles.header}>
      <img src={RediflixLogo} alt="Rediflix Logo" className={styles.logo} />
      {isPrivate ? (
        <>
          <NavigationMenu />
          {/* // TODO: add search, notifications, profile icon */}
        </>
      ) : (
        isPublic && (
          <div className={styles.selectors}>
            <Select options={selectOptions} placeholder="English" />
            <Button onClick={() => {}}>Sign In</Button>
          </div>
        )
      )}
    </header>
  );
};

export default Header;
