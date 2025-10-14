import { NavLink } from 'react-router';

import { routePaths } from '../../config/RoutePaths';

import styles from './NavigationMenu.module.css';

const NavigationMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        {Object.values(routePaths).map((getRoute) => {
          const [label, route] = getRoute();
          return (
            <li className={styles.list} key={label}>
              <NavLink
                to={route}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
