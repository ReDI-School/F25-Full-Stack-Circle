interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}
interface NavigationMenuProps {
  navItems: NavItem[];

  children?: React.ReactNode;

  onClick?: () => void;
}

export type { NavigationMenuProps, NavItem };
