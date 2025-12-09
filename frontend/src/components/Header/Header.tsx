import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Button, Logo, Modal, NavigationMenu, Select } from '../';
import SmallAvatarIcon from '../../assets/icons/smallAvatar.svg';
import { languagesMap } from '../../constants/languages';
import { navigationItems, routePaths } from '../../routes/routePaths';
import type { HeaderProps } from './Header.types';

import { useStateToggleHandlers } from '../../hooks';
import Profiles from '../../pages/Profiles/Profiles';
import styles from './Header.module.css';

const selectOptions = Object.entries(languagesMap).map(([value, label]) => ({
  value,
  label,
}));
const defaultLanguage = selectOptions.find((option) => option.value === 'en');

export const Header = ({ type }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, openProfileMenu, closeProfileMenu] = useStateToggleHandlers(false);

  const isPrivate = type === 'private';
  const isPublic = type === 'public';
  const isAuth = type === 'auth';

  const headerClassName = [
    styles.header,
    isPrivate && styles.private,
    isPublic && styles.public,
    isAuth && styles.auth,
    isScrolled && styles.scrolled,
  ]
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    if (!isPrivate) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPrivate]);

  return (
    <>
      <header className={headerClassName}>
        <div className={styles.container}>
          <Logo className={styles.logo} />
          {isPrivate && (
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
                <Button
                  className={styles.profileButton}
                  aria-label="User menu"
                  icon="arrowDown"
                  onClick={openProfileMenu}
                >
                  <img src={SmallAvatarIcon} alt="User profile" className={styles.avatar} />
                </Button>
              </div>
            </>
          )}
          {isPublic && (
            <div className={styles.selectors}>
              <Select options={selectOptions} selected={defaultLanguage} />
              <Link to={routePaths.signIn().path} className={styles.signInLink}>
                Sign In
              </Link>
            </div>
          )}
        </div>
      </header>
      <Modal isOpen={isProfileMenuOpen}>
        <Profiles onProfileClick={closeProfileMenu} />
      </Modal>
    </>
  );
};

export default Header;
