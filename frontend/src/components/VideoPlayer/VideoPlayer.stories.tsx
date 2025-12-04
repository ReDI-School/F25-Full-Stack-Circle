import type { Meta, StoryObj } from '@storybook/react-vite';
import Video from './VideoPlayer';
import Local from '../../assets/video/sample-video.mp4';
import Image from '../../assets/images/logo.svg';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Video> = {
  title: 'Components/VideoPlayer',
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
    src: 'https://vimeo.com/1124449787',
    playing: true,
    light:
      'https://i.vimeocdn.com/video/2066328655-4be9e0a8e8c43c2e1d24bb918cee4072980b9a7d473960ace1111ad2ded75073-d?mw=2000&mh=1127&q=70',
    playIcon: playIconComponent,
  },
};

export const LocalVideo: Story = {
  args: {
    src: Local,
    playing: true,
    light: (
      <img style={{ position: 'absolute', zIndex: -1 }} src={Image} width={100} height={100} />
    ), // can be a component
    playIcon: playIconComponent,
  },
};

export const Youtube: Story = {
  args: {
    src: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
  },
};
