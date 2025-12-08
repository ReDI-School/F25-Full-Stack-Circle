import type { Meta, StoryObj } from '@storybook/react-vite';

import LandingPage from './Landing';

const meta: Meta<typeof LandingPage> = {
  title: 'Page/landing',
  component: LandingPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  render: () => <LandingPage />,
};
