import RediflixLogo from '../../assets/images/logo.svg';
import { languagesMap } from '../../constants/languages';
import useRoutesListMatch from '../../hooks/useRouteListMatch';
import { routePaths } from '../../routes/routePaths';
import Button from '../Button/Button';
import { NavigationMenu } from '../NavigationMenu';
import Select from '../Select/Select';
import type { HeaderProps } from './Header.types';

import styles from './Header.module.css';

const authRoutes = [routePaths.signIn().path, routePaths.signUp().path];

export const Header = ({ type }: HeaderProps) => {
  const { isMatched: isAuthPage } = useRoutesListMatch(authRoutes);

  const isPrivate = type === 'private';
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
        !isAuthPage && (
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
