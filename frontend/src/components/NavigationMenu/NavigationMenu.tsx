import { NavLink } from 'react-router';

import { routePaths, routeLabels } from '../../config/RoutePaths';

import styles from './NavigationMenu.module.css';

const resolveRoute = (route?: string | (() => string)) => {
  if (!route) return '#';
  return typeof route === 'function' ? route() : route;
};

const NavigationMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        {Object.entries(routePaths).map(([key, route]) => (
          <li className={styles.list} key={key}>
            <NavLink
              to={resolveRoute(route)}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {routeLabels[key as keyof typeof routePaths] ?? key}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
