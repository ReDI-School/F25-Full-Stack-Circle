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

export const Big: Story = {
  render: () => (
    <>
      <UserIcon size="big" avatar="04" userName="Big">
        Big
      </UserIcon>
    </>
  ),
};

export const Small: Story = {
  render: () => (
    <>
      <UserIcon size="small" avatar="15"></UserIcon>
    </>
  ),
};

export const All: Story = {
  render: () => (
    <>
      {Array.from({ length: 46 }, (_, i) => {
        const avatarNumber = String(i + 1).padStart(2, '0'); // '01', '02', ...
        return (
          <div key={avatarNumber} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <UserIcon size="big" avatar={avatarNumber} userName={`User ${i + 1}`} />
            <UserIcon size="small" avatar={avatarNumber} />
          </div>
        );
      })}
    </>
  ),
};
