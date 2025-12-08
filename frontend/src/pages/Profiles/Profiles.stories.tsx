import type { Meta, StoryObj } from '@storybook/react-vite';

import Profiles from './Profiles';

const meta: Meta<typeof Profiles> = {
  title: 'Components/WhoIsWatching',
  component: Profiles,
  decorators: [(Story) => <Story />],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Profiles>;

export const Default: Story = {
  render: () => <Profiles onProfileClick={() => {}} />,
};
