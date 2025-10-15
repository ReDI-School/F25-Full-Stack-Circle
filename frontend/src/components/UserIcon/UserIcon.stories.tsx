import type { Meta, StoryObj } from '@storybook/react-vite';

import UserIcon from './UserIcon';

const meta: Meta<typeof UserIcon> = {
  title: 'Components/UserIcon',
  component: UserIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserIcon>;

export const Default: Story = {
  args: {
    children: 'UserIcon',
  },
};

export const Disabled: Story = {
  args: {
    children: 'UserIcon',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <UserIcon size="big" icon="01">
        Big
      </UserIcon>
      <UserIcon size="small" icon="16"></UserIcon>
    </>
  ),
};
