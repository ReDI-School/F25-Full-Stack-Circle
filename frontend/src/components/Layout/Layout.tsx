<<<<<<< HEAD
=======
import { cva } from 'class-variance-authority';

import authBgImage from '../../assets/images/auth-bg-image.png';
import useRoutesListMatch from '../../hooks/useRouteListMatch';
import { authRoutes, routePaths } from '../../routes/routePaths';

import { Header } from '../Header';
>>>>>>> main
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
<<<<<<< HEAD
  return <div className={styles.layout}>{children}</div>;
=======
  const { isMatched: isAuthPage } = useRoutesListMatch(authRoutes);
  const { isMatched: isLandingPage } = useRoutesListMatch([routePaths.landingPage().path]);

  const headerType = isAuthPage ? 'auth' : isLandingPage ? 'public' : 'private';

  return (
    <div
      className={styledLayout({ isAuthPage })}
      style={isAuthPage ? { backgroundImage: `url(${authBgImage})` } : undefined}
    >
      <div className={styles.container}>
        <Header type={headerType} />
        {children}
      </div>
    </div>
  );
>>>>>>> main
};

export default Layout;
