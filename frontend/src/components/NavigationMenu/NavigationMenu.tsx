import { NavLink } from 'react-router';

import styles from './NavigationMenu.module.css';

type NavigationMenuProps = {
  navItems: { label: string; path: string }[];
  className?: string;
};

const NavigationMenu = ({ navItems, className }: NavigationMenuProps) => (
  <nav className={`${styles.nav} ${className}`} aria-label="Primary navigation">
    <ul className={styles.items}>
      {navItems.map(({ label, path }) => (
        <li className={styles.list} key={path}>
          <NavLink
            to={path}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationMenu;
