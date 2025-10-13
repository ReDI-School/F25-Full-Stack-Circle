import type { Meta, StoryObj } from '@storybook/react-vite';

import { MemoryRouter, Route, Routes } from 'react-router';

import { NavigationMenu } from './index';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <>
      <NavigationMenu />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<h2>🏠 Home Page</h2>} />
          <Route path="/shows" element={<h2>📺 TV Shows Page</h2>} />
          <Route path="/news" element={<h2>📰 News & Popular Page</h2>} />
          <Route path="/list" element={<h2>📋 My List Page</h2>} />
          <Route path="/language" element={<h2>🌍 Browse by Language Page</h2>} />
        </Routes>
      </div>
    </>
  ),
};
