import type { Meta, StoryObj } from '@storybook/react-vite';

import LandingPageEmail from './LandingPageEmail';

const meta: Meta<typeof LandingPageEmail> = {
  title: 'Components/LandingPageEmail',
  component: LandingPageEmail,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#000000',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LandingPageEmail>;

export const Default: Story = {};
