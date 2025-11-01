import { NavLink } from 'react-router';

import { routePaths } from '../../config/RoutePaths';

import styles from './NavigationMenu.module.css';

const isDevelopment = import.meta.env.DEV;

const isValidRouteConfig = (value: unknown): value is () => [string, string] => {
  if (typeof value !== 'function') {
    if (isDevelopment) {
      console.warn('NavigationMenu: Invalid route config - not a function', value);
    }
    return false;
  }

  try {
    const result = value();

    if (!Array.isArray(result) || result.length !== 2) {
      if (isDevelopment) {
        console.warn(
          'NavigationMenu: Invalid route config - function must return [label, route] tuple',
          result
        );
      }
      return false;
    }

    const [label, route] = result;

    if (typeof label !== 'string' || typeof route !== 'string') {
      if (isDevelopment) {
        console.warn(
          'NavigationMenu: Invalid route config - both label and route must be strings',
          result
        );
      }
      return false;
    }

    if (!label.trim() || !route.trim()) {
      if (isDevelopment) {
        console.warn(
          'NavigationMenu: Invalid route config - label and route cannot be empty',
          result
        );
      }
      return false;
    }

    return true;
  } catch (error) {
    if (isDevelopment) {
      console.error('NavigationMenu: Error validating route config', error);
    }
    return false;
  }
};

const NavigationMenu = () => {
  const validRoutes = Object.values(routePaths).filter(isValidRouteConfig);

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <ul className={styles.items}>
        {validRoutes.map((getRoute) => {
          const [label, route] = getRoute();
          return (
            <li className={styles.list} key={route}>
              <NavLink
                to={route}
                className={({ isActive }: { isActive: boolean }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
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
