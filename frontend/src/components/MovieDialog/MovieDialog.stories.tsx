import type { Meta, StoryObj } from '@storybook/react-vite';
import MovieDialog from './MovieDialog';

export const mockTitles = [
  {
    id: 1,
    name: 'House of Ninjas',
    type: 'SERIES' as const,
    category: ['Action', 'Adventure'],
    ageRestriction: 'TV14' as const,
    videos: [
      {
        id: 101,
        name: 'Episode 1',
        image: '/assets/shows/episode1.jpg',
        duration: 45,
        url: '/assets/videos/episode1.mp4',
        episodeNumber: 1,
      },
      {
        id: 102,
        name: 'Episode 2',
        image: '/assets/shows/episode2.jpg',
        duration: 50,
        url: '/assets/videos/episode2.mp4',
        episodeNumber: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'The Last Samurai',
    type: 'MOVIE' as const,
    category: ['Action', 'Drama'],
    ageRestriction: 'PG13' as const,
    videos: [
      {
        id: 201,
        name: 'Movie Video',
        image: '/assets/movies/last-samurai.jpg',
        duration: 120,
        url: '/assets/videos/last-samurai.mp4',
      },
    ],
  },
];

const meta: Meta<typeof MovieDialog> = {
  title: 'Components/MovieDialog',
  component: MovieDialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieDialog>;

export const Default: Story = {
  args: { titleId: 1 },
};
