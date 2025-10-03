import type { Meta, StoryObj } from '@storybook/react-vite';
import Video from './Video';
import localVideo from '../../assets/video/sample-video.mp4';
import { IconButton } from '../IconButton';
import img from '../../assets/images/dolbyVector.svg';

const meta: Meta<typeof Video> = {
  title: 'Components/VideoReactPlayer',
  component: Video,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    src: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    width: 500,
    height: 500,
    volume: .5,
  },
};

export const WithPlayIconInThumbnail: Story = {
  args: {
    src: 'https://vimeo.com/524933864',
    width: 500,
    height: 500,
    light: img,
    playIcon:<IconButton icon='play' />
  },
};

export const LocalVideo: Story = {
  args: {
    src: localVideo,
  },
};
