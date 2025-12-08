import { cva } from 'class-variance-authority';

import authBgImage from '../../assets/images/auth-bg-image.png';
import landingBgImage from '../../assets/images/hero-image.png';
import useRoutesListMatch from '../../hooks/useRouteListMatch';
import { authRoutes, routePaths } from '../../routes/routePaths';

import { Header } from '../Header';
import styles from './Layout.module.css';
import { useLocation } from 'react-router';

const styledLayout = cva(styles.layout, {
  variants: {
    isAuthPage: {
      true: styles.auth,
    },
  },
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMatched: isAuthPage } = useRoutesListMatch(authRoutes);
  const { isMatched: isLandingPage } = useRoutesListMatch([routePaths.landingPage().path]);

  let headerType: 'auth' | 'public' | 'private';
  if (isAuthPage) {
    headerType = 'auth';
  } else if (isLandingPage) {
    headerType = 'public';
  } else {
    headerType = 'private';
  }
  const location = useLocation();
  const isAccountHomePage = location.pathname === '/home';

  let backgroundImage = undefined;

  if (isAuthPage) {
    backgroundImage = authBgImage;
  } else if (isLandingPage) {
    backgroundImage = landingBgImage;
  }

  const content = (
    <div className={styles.pageWrapper}>
      <Header type={headerType} />
      <main className={styles.main}>{children}</main>
    </div>
  );

  return isAccountHomePage ? (
    <div className={styledLayout({ isAuthPage })}>{content}</div>
  ) : (
    <div
      className={styles.mainWrapper}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={styledLayout({ isAuthPage })}>
        <div className={styles.container}>{content}</div>
      </div>
    </div>
  );
};

export default Layout;
