import { cva } from 'class-variance-authority';

import useRoutesListMatch from '../../hooks/useRouteListMatch';
import { authRoutes, routePaths } from '../../routes/routePaths';

import { Header } from '../Header';
import styles from './Layout.module.css';

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

  return (
    <div className={styledLayout({ isAuthPage })}>
      <div className={styles.container}>
        <Header type={headerType} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
