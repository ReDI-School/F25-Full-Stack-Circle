import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigationMenu } from './index';
import type { NavItem } from './index';

const items: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'TV Shows', href: '/shows' },
  { label: 'News & Popular', href: '/news' },
  { label: 'My List', href: '/list' },
  { label: 'Browse By Language', href: '/language' },
];

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    navItems: items,
  },
};
