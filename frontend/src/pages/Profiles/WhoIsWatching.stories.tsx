import type { Meta, StoryObj } from '@storybook/react-vite';

import WhoIsWatching from './WhoIsWatching';

const meta: Meta<typeof WhoIsWatching> = {
  title: 'Components/WhoIsWatching',
  component: WhoIsWatching,
  decorators: [(Story) => <Story />],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WhoIsWatching>;

export const Default: Story = {
  render: () => <WhoIsWatching />,
};
