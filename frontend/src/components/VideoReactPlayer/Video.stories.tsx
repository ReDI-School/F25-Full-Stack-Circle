import type { Meta, StoryObj } from '@storybook/react-vite';
import Video from './Video';
import Local from '../../assets/video/sample-video.mp4';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Video> = {
  title: 'Components/VideoReactPlayer',
  component: Video,
  tags: ['autodocs'],
};

const playIconComponent = <IconButton icon="play" theme="secondary" variant="outlined" />;

export default meta;

type Story = StoryObj<typeof Video>;

export const Vimeo: Story = {
  args: {
    src: 'https://vimeo.com/524933864',
    playing: true,
  },
};

export const VimeoPlayIconWithThumbnail: Story = {
  args: {
    // from my account
    src: 'https://vimeo.com/1124449787',

    // src: 'https://vimeo.com/90509568', // original
    // light: true,
    playing: true,

    light:
      'https://i.vimeocdn.com/video/2066328655-4be9e0a8e8c43c2e1d24bb918cee4072980b9a7d473960ace1111ad2ded75073-d?mw=2000&mh=1127&q=70',
    playIcon: playIconComponent,
    currentTime: 70,
  },
};

export const LocalVideo: Story = {
  args: {
    src: Local,
    playing: true,
    light: 'https://placehold.co/600x400',
    playIcon: playIconComponent,
  },
};

export const Youtube: Story = {
  args: {
    src: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
  },
};
