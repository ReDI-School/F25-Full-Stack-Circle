interface NavItem {
  label: string;
  href: string | (() => string);
  onClick?: () => void;
}
interface NavigationMenuProps {
  navItems?: NavItem[];
}

export type { NavigationMenuProps, NavItem };
