import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { MemoryRouter } from 'react-router';
import VideoDialog from './VideoDialog';
import { Button } from '../Button';

const meta: Meta<typeof VideoDialog> = {
  title: 'Components/VideoDialog',
  component: VideoDialog,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A full-screen video dialog component with custom video and audio controls. Uses VideoPlayerWrapper which includes VideoPlayer and VideoControlBar components with all controls for playback, volume, progress, and playback speed.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoDialog>;

const VideoDialogWrapper = (args: Parameters<typeof VideoDialog>[0]) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Video Dialog</Button>
      <VideoDialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <VideoDialogWrapper {...args} />,
  args: {
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
  },
};

export const VimeoVideo: Story = {
  render: (args) => <VideoDialogWrapper {...args} />,
  args: {
    videoUrl: 'https://vimeo.com/524933864',
    title: 'Sample Vimeo Video',
  },
};

export const YoutubeVideo: Story = {
  render: (args) => <VideoDialogWrapper {...args} />,
  args: {
    videoUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    title: 'Sample YouTube Video',
  },
};

export const WithoutTitle: Story = {
  render: (args) => <VideoDialogWrapper {...args} />,
  args: {
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
};
