import type { Meta, StoryObj } from '@storybook/react-vite';

import LandingPageEmail from './LandingPageEmail';

const meta: Meta<typeof LandingPageEmail> = {
  title: 'Components/LandingPageEmail',
  component: LandingPageEmail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LandingPageEmail>;

export const Default: Story = {
  args: {
    children: 'LandingPageEmail',
  },
};
