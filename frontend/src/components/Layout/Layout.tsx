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

  let headerType: 'auth' | 'public' | 'private';

  if (isAuthPage) {
    headerType = 'auth';
  } else if (isLandingPage) {
    headerType = 'public';
  } else {
    headerType = 'private';
  }

  return (
    <div className={styledLayout({ isAuthPage })}>
      <div className={styles.container}>
        <Header type={headerType} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
