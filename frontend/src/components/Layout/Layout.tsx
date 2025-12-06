import { cva } from 'class-variance-authority';

import authBgImage from '../../assets/images/auth-bg-image.png';
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

  const headerType = isAuthPage ? 'auth' : isLandingPage ? 'public' : 'private';
  const location = useLocation();
  const isAccountHomePage = location.pathname === '/home';

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
      className={styledLayout({ isAuthPage })}
      style={isAuthPage ? { backgroundImage: `url(${authBgImage})` } : undefined}
    >
      <div className={styles.container}>{content}</div>
    </div>
  );
};

export default Layout;
