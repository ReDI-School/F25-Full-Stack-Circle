import styles from './NavigationMenu.module.css';
import { Link } from 'react-router';
import { routePaths, routeLabels } from '../../config/RoutePaths';

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
            <Link to={resolveRoute(route)} className={styles.link}>
              {routeLabels[key as keyof typeof routePaths] ?? key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
