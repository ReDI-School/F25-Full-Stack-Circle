import type { Meta, StoryObj } from '@storybook/react-vite';

import LandingPageHeader from './LandingPageHeader';

const meta: Meta<typeof LandingPageHeader> = {
  title: 'Components/LandingPageHeader',
  component: LandingPageHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LandingPageHeader>;

export const Default: Story = {
  args: {
    children: 'LandingPageHeader',
  },
};
