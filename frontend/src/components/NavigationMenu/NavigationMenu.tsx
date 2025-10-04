import type { NavigationMenuProps } from './NavigationMenu.types';
import styles from './NavigationMenu.module.css';
import { Link } from 'react-router';

const NavigationMenu = ({ navItems }: NavigationMenuProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        {navItems.map((item) => (
          <li className={styles.list} key={item.label}>
            <Link to={item.href} onClick={item.onClick} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
