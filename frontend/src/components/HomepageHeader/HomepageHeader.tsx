import styles from './HomepageHeader.module.css';
import RediflixLogo from '../../assets/images/logo.svg';
import TranslatorIcon from '../../assets/icons/translator.svg';
import SearchIcon from '../../assets/icons/search.svg';
import NotificationIcon from '../../assets/icons/notification.svg';
import ArrowDownIcon from '../../assets/icons/arrowDownIcon.svg';
import smallAvatar from '../../assets/icons/smallAvatar.svg';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { getNavigationItems } from '../../config/RoutePaths';
import { LANGUAGE_OPTIONS, DEFAULT_LANGUAGE } from '../../constants/LanguageOptions';
import type { HomepageHeaderProps } from './HomepageHeader.types';
import type { OptionType } from '../Select';

export const HomepageHeader = ({
  type = 'LandingPage',
  onSignIn,
  onLanguageChange,
  userAvatar,
  currentPage = 'Home',
  ...props
}: HomepageHeaderProps) => {
  const navigationItems = getNavigationItems();

  const handleLanguageChange = (option: OptionType<string>) => {
    onLanguageChange?.(option.value);
  };

  return (
    <header className={styles.header} data-type={type} {...props}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <img src={RediflixLogo} alt="Rediflix Logo" className={styles.logo} />

          {type === 'HomePage' && (
            <nav className={styles.navigation}>
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className={`${styles.navItem} ${currentPage === item.label ? styles.navItemActive : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div
          className={
            type === 'LandingPage'
              ? styles['rightSection-landing-page']
              : styles['rightSection-home-page']
          }
        >
          {type === 'LandingPage' ? (
            <>
              <Select
                options={LANGUAGE_OPTIONS}
                selected={DEFAULT_LANGUAGE}
                onChange={handleLanguageChange}
                placeholder={DEFAULT_LANGUAGE.label}
                aria-label="Select language"
                id="language-select"
                icon={<img src={TranslatorIcon} alt="" />}
                iconPosition="before"
                className={styles.languageSelect}
              />
              <Button variant="primary" size="small" onClick={onSignIn}>
                Sign In
              </Button>
            </>
          ) : (
            <>
              <button className={styles.iconButton} aria-label="Search">
                <img src={SearchIcon} alt="" width="24" height="24" />
              </button>

              <button className={styles.iconButton} aria-label="Notifications">
                <img src={NotificationIcon} alt="" width="24" height="24" />
              </button>

              <div className={styles.userProfile}>
                <button className={styles.profileButton} aria-label="User menu">
                  <img
                    src={userAvatar || smallAvatar}
                    alt="User profile"
                    className={styles.avatar}
                  />
                  <img src={ArrowDownIcon} alt="" width="12" height="12" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
