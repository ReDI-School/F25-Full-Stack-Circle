import { cva } from 'class-variance-authority';

import type { HeaderType } from '../';
import { Footer, Header } from '../';
import useRoutesListMatch from '../../hooks/useRouteListMatch';
import { authRoutes, routePaths } from '../../routes/routePaths';

import styles from './Layout.module.css';

const styledLayout = cva(styles.layout, {
  variants: {
    isAuthPage: {
      true: styles.auth,
    },
  },
});

let headerType: HeaderType;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMatched: isAuthPage } = useRoutesListMatch(authRoutes);
  const { isMatched: isLandingPage } = useRoutesListMatch([routePaths.landingPage().path]);

  if (isAuthPage) {
    headerType = 'auth';
  } else if (isLandingPage) {
    headerType = 'public';
  } else {
    headerType = 'private';
  }

  return (
    <div className={styledLayout({ isAuthPage })}>
      <Header type={headerType} />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
