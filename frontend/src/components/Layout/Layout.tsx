import { cva } from 'class-variance-authority';

import useRoutesListMatch from '../../hooks/useRouteListMatch';
import { routePaths } from '../../routes/routePaths';

import { Header } from '../Header';
import styles from './Layout.module.css';

const styledLayout = cva(styles.layout, {
  variants: {
    isAuthPage: {
      true: styles.auth,
    },
  },
});

const authRoutes = [routePaths.signIn().path, routePaths.signUp().path];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMatched: isAuthPage } = useRoutesListMatch(authRoutes);
  const { isMatched: isLandingPage } = useRoutesListMatch([]); // TODO: add landing page route when created

  const headerType = isAuthPage ? 'auth' : isLandingPage ? 'public' : 'private';

  return (
    <div className={styledLayout({ isAuthPage })}>
      <Header type={headerType} />
      {children}
    </div>
  );
};

export default Layout;
