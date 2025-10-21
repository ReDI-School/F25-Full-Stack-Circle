import { NavLink } from 'react-router';

import { routePaths } from '../../routes/routePaths';

import styles from './NavigationMenu.module.css';

const NavigationMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        {Object.entries(routePaths).map(([, getRoute]) => {
          const { label, path } = getRoute();
          return (
            <li className={styles.list} key={label}>
              <NavLink
                to={path}
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
