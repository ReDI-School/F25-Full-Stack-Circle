import type { Meta, StoryObj } from '@storybook/react-vite';

import { MemoryRouter } from 'react-router';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const PublicHeader: Story = {
  args: {
    type: 'public',
  },
};

export const PrivateHeader: Story = {
  args: {
    type: 'private',
  },
};

export const AuthHeader: Story = {
  args: {
    type: 'auth',
  },
};
