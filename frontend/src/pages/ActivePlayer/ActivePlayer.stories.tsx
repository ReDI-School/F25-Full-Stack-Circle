import type { Meta, StoryObj } from '@storybook/react-vite';
import ActivePlayer from './ActivePlayer';
import type { VideoDetails } from './ActivePlayer.types';

const meta: Meta<typeof ActivePlayer> = {
  title: 'Pages/ActivePlayer',
  component: ActivePlayer,
  tags: ['autodocs'],
  argTypes: {
    // define controls/actions here if needed
  },
};

export default meta;
type Story = StoryObj<typeof ActivePlayer>;

// Test video details data
const testVideo: VideoDetails = {
  id: '1',
  title: 'Big Buck Bunny',
  url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
};

// Default story: Assume data loaded and valid video
export const Default: Story = {
  args: {
    id: '1',
    loading: false,
    video: testVideo,
  },
  parameters: {
    // add mocks or decorators here if needed
  },
};

// Loading state story
export const Loading: Story = {
  args: {
    id: '123',
    loading: true,
    video: null,
  },
  parameters: {
    // simulate loading state if needed
  },
};

// Video not found story
export const VideoNotFound: Story = {
  args: {
    id: 'notfound',
    loading: false,
    video: null,
  },
  parameters: {
    // simulate video not found scenario
  },
};

