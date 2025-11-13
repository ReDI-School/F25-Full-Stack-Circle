import type { Meta, StoryObj } from '@storybook/react-vite';
import VideoControlButton from './VideoControlButton';

const meta: Meta<typeof VideoControlButton> = {
  title: 'Components/VideoControlButton',
  component: VideoControlButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VideoControlButton>;

export const Default: Story = {
  args: {
    icon: 'play',
  },
};

export const All: Story = {
  render: () => (
    <>
      <VideoControlButton icon="play" />
      <VideoControlButton icon="pause" />
      <VideoControlButton icon="rewind" />
      <VideoControlButton icon="forward" />
      <VideoControlButton icon="mute-volume" />
      <VideoControlButton icon="medium-volume" />
      <VideoControlButton icon="high-volume" />
      <VideoControlButton icon="next" />
      <VideoControlButton icon="episode-list" />
      <VideoControlButton icon="caption" />
      <VideoControlButton icon="playback" />
      <VideoControlButton icon="fullscreen" />
    </>
  ),
};
