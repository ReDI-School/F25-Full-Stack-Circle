import type { Meta, StoryObj } from '@storybook/react-vite';
import VideoControlBar from './VideoControlBar';
import { ProgressBar } from '../ProgressBar';

const meta: Meta<typeof VideoControlBar> = {
  title: 'Components/VideoControlBar',
  component: VideoControlBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VideoControlBar>;

export const Default: Story = {
  args: {
    children: [<ProgressBar value={15} loaded={20} color={'red'} maxLabel="01:50:51" />],
  },
};
