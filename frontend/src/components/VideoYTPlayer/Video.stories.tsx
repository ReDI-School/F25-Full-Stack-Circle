import type { Meta, StoryObj } from '@storybook/react-vite';
import Video from './Video';

const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    videoId: '3Rf0dIk_Eec',
  },
};
