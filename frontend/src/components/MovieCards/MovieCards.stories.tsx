import type { Meta, StoryObj } from '@storybook/react-vite';
// Fallback action helper to avoid depending on '@storybook/addon-actions' in environments
const action =
  (name: string) =>
  (...args: unknown[]) => {
    // simple logger for story callbacks

    console.log(`[action:${name}]`, ...args);
  };
import MovieCards from './MovieCards';
import type { MovieCardData } from './MovieCards.types';
import movieCardImg from '../../assets/images/movieCard.png';

const meta: Meta<typeof MovieCards> = {
  title: 'Components/MovieCards',
  component: MovieCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    onCardClick: action('onCardClick'),
    onPlayClick: action('onPlayClick'),
  },
};
export default meta;

type Story = StoryObj<typeof MovieCards>;

// Cards per variant
const defaultCards: MovieCardData[] = [{ id: '1', title: 'Inception', thumbnail: movieCardImg }];

const moreLikeThisCards: MovieCardData[] = [
  { id: '4', title: 'Blade Runner 2049', thumbnail: movieCardImg, isNew: true },
];

const episodePreviewCards: MovieCardData[] = [
  { id: '7', title: 'Episode 1', thumbnail: movieCardImg },
];

const trailerPreviewCards: MovieCardData[] = [
  { id: '10', title: 'House of Ninjas', thumbnail: movieCardImg, seasonInfo: 'Season 1' },
];

const playerPreviewCards: MovieCardData[] = [
  { id: '12', title: 'Short Film', thumbnail: movieCardImg, duration: '51:29' },
];

const top10Cards: MovieCardData[] = [
  { id: '14', title: 'Hit #1', thumbnail: movieCardImg, rank: 1, isNew: true },
  { id: '15', title: 'Hit #2', thumbnail: movieCardImg, rank: 2 },
  { id: '16', title: 'Hit #3', thumbnail: movieCardImg, rank: 3 },
  { id: '18', title: 'Hit #4', thumbnail: movieCardImg, rank: 4 },
  { id: '19', title: 'Hit #5', thumbnail: movieCardImg, rank: 5 },
  { id: '20', title: 'Hit #6', thumbnail: movieCardImg, rank: 6 },
];

const continueWatchingCards: MovieCardData[] = [
  { id: '17', title: 'Show A', thumbnail: movieCardImg, progress: 35 },
];

// Stories
export const Default: Story = {
  args: {
    cards: defaultCards,
    variant: 'default',
  },
};

export const MoreLikeThis: Story = {
  args: {
    cards: moreLikeThisCards,
    variant: 'moreLikeThis',
  },
};

export const EpisodePreview: Story = {
  args: {
    cards: episodePreviewCards,
    variant: 'episodePreview',
  },
};

export const TrailerPreview: Story = {
  args: {
    cards: trailerPreviewCards,
    variant: 'trailerPreview',
    // onPlayClick provided to render the play button inside the component
    onPlayClick: action('onPlayClick'),
  },
};

export const PlayerPreview: Story = {
  args: {
    cards: playerPreviewCards,
    variant: 'playerPreview',
  },
};

export const Top10: Story = {
  args: {
    cards: top10Cards,
    variant: 'top10',
  },
};

export const ContinueWatching: Story = {
  args: {
    cards: continueWatchingCards,
    variant: 'continueWatching',
  },
};
