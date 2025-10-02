import type { NavigationMenuProps } from './NavigationMenu.types';
import styles from './NavigationMenu.module.css';

const NavigationMenu = ({ navItems }: NavigationMenuProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        {navItems.map((item) => (
          <li className={styles.list} key={item.label}>
            <a href="{item.href}" onClick={item.onClick} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
