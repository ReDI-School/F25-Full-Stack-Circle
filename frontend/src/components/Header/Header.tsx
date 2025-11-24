import { Link } from 'react-router';

import SmallAvatarIcon from '../../assets/icons/smallAvatar.svg';
import RediflixLogo from '../../assets/images/logo.svg';
import { languagesMap } from '../../constants/languages';
import { Button } from '../Button';
import { NavigationMenu } from '../NavigationMenu';
import { Select } from '../Select';
import type { HeaderProps } from './Header.types';

import { navigationItems, routePaths } from '../../routes/routePaths';

import styles from './Header.module.css';

const selectOptions = Object.entries(languagesMap).map(([value, label]) => ({
  value,
  label,
}));
const defaultLanguage = selectOptions.find((option) => option.value === 'en');

export const Header = ({ type }: HeaderProps) => {
  const isPrivate = type === 'private';
  const isPublic = type === 'public';
  const logoLink = isPublic ? routePaths.landingPage().path : routePaths.browse().path;

  return (
    <header className={styles.header}>
      <Link to={logoLink} className={styles.logo}>
        <img src={RediflixLogo} alt="Rediflix Logo" />
      </Link>

      {isPrivate ? (
        <>
          <NavigationMenu className={styles.navigation} navItems={navigationItems} />
          <div className={styles.iconButtons}>
            <Button className={styles.iconButton} aria-label="Search" icon="search" iconOnly />
            <Button
              className={styles.iconButton}
              aria-label="Notifications"
              icon="notification"
              iconOnly
            />
          </div>
          <div className={styles.userProfile}>
            <Button className={styles.profileButton} aria-label="User menu" icon="arrowDown">
              <img src={SmallAvatarIcon} alt="User profile" className={styles.avatar} />
            </Button>
          </div>
        </>
      ) : (
        isPublic && (
          <div className={styles.selectors}>
            <Select options={selectOptions} selected={defaultLanguage} />
            <Link to={routePaths.signIn().path} className={styles.signInLink}>
              Sign In
            </Link>
          </div>
        )
      )}
    </header>
  );
};

export default Header;
