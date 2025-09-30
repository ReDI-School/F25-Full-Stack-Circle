import type { Meta, StoryObj } from '@storybook/react-vite';
import { EpisodeList } from './index';
import type { Episode } from './EpisodeList.types';

const meta: Meta<typeof EpisodeList> = {
  title: 'Components/EpisodeList',
  component: EpisodeList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EpisodeList>;

const placeholderEpisodes: Episode[] = [
  {
    id: 1,
    number: 1,
    thumbnail: 'thumbnail@1.png',
    title: 'The Offer',
    description: 'While Haru Tawara develops a crush on a mysterious young woman...',
    duration: '55m',
  },
  {
    id: 2,
    number: 2,
    thumbnail: 'thumbnail@2.png',
    title: 'The Trail',
    description: 'Haru accompanies Karen',
    duration: '52m',
  },
];

export const Default: Story = {
  args: {
    episodes: placeholderEpisodes,
    onEpisodeClick: (episode) => alert(`Clicked on: ${episode.title}`),
  },
};

