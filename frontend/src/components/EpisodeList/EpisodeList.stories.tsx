import type { Meta, StoryObj } from '@storybook/react-vite';
import EpisodeList from './EpisodeList';
import type { Episode, EpisodeListProps } from './EpisodeList.types';

const meta: Meta<typeof EpisodeList> = {
  title: 'Components/EpisodeList',
  component: EpisodeList,
  tags: ['autodocs'],
  argTypes: {
    onEpisodeClick: { action: 'episode clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof EpisodeList>;

const placeholderEpisodes: Episode[] = [
  {
    id: 1,
    url: 'https://vimeo.com/679974686',
    number: 1,
    thumbnail: 'https://placehold.co/600x400',
    title: 'The Offer',
    description:
      "While Haru Tawara develops a crush on a mysterious young woman at work, an unusual opportunity arises at his father's financially struggling brewery.",
    duration: '55m',
  },
  {
    id: 2,
    url: 'https://vimeo.com/679974686',
    number: 2,
    thumbnail: 'https://placehold.co/600x400',
    title: 'The Trail',
    description:
      "Haru accompanies Karen to investigate a whistleblower's apartment. Meanwhile, several other Tawaras are tempted to step out of their ordinary lives.",
    duration: '52m',
  },
];

export const Default: Story = {
  args: {
    episodes: placeholderEpisodes,
  } as EpisodeListProps,
};

export const OnClickStory: Story = {
  args: {
    episodes: placeholderEpisodes,
    onEpisodeClick: (episode) => {
      alert(`Clicked: ${episode.title}`);
    },
  } as EpisodeListProps,
};

export const InEmptyStory: Story = {
  args: {
    episodes: [],
  } as EpisodeListProps,
};
