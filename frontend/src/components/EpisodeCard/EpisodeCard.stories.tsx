import type { Meta, StoryObj } from '@storybook/react-vite';
import EpisodeCard from './EpisodeCard';
import type { EpisodeCardProps } from './EpisodeCard.types';

const meta: Meta<typeof EpisodeCard> = {
  title: 'Components/EpisodeCard',
  component: EpisodeCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'card clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof EpisodeCard>;

const placeholderEpisode = {
  id: 1,
  number: 1,
  thumbnail: 'https://placehold.co/600x400',
  title: 'The Offer',
  description:
    "While Haru Tawara develops a crush on a mysterious young woman at work, an unusual opportunity arises at his father's financially struggling brewery.",
  duration: '55m',
};

export const Default: Story = {
  args: {
    episode: placeholderEpisode,
  } as EpisodeCardProps,
};

export const WithClick: Story = {
  args: {
    episode: placeholderEpisode,
    onClick: (episode) => {
      alert(`Clicked: ${episode.title}`);
    },
  } as EpisodeCardProps,
};

export const CurrentCard: Story = {
  args: {
    episode: placeholderEpisode,
    isCurrent: true,
  } as EpisodeCardProps,
};
