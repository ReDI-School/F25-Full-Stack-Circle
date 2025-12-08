import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShowsCarousel } from './ShowsCarousel';
import type { ShowsCarouselProps } from './ShowsCarousel.types';

const meta: Meta<typeof ShowsCarousel> = {
  title: 'Components/ShowsCarousel',
  component: ShowsCarousel,
};
export default meta;

export const Default: StoryObj<ShowsCarouselProps> = {
  args: {
    title: 'Popular Shows',
    movieCard: {
      cards: Array.from({ length: 35 }).map((_, index) => ({
        id: index + 1,
        title: `Show ${index + 1}`,
        thumbnail: `http://localhost:6006/images/show${index + 1}.png`,
        isNew: index < 3,
      })),
      variant: 'default',
      onCardClick: (id: number) => console.log('Card clicked:', id),
      onPlayClick: (id: number) => console.log('Play clicked:', id),
    },
  },
};

export const CarouselWithTopTen: StoryObj<ShowsCarouselProps> = {
  args: {
    title: 'Popular Shows',
    movieCard: {
      cards: Array.from({ length: 6 }).map((_, index) => ({
        id: index + 1,
        title: `Show ${index + 1}`,
        thumbnail: `http://localhost:6006/images/show${index + 1}.png`,
        rank: index + 1,
      })),
      variant: 'top10',
    },
  },
};

export const CarouselWithFullTop10: StoryObj<ShowsCarouselProps> = {
  args: {
    title: 'Top 10 Shows',
    movieCard: {
      cards: Array.from({ length: 10 }).map((_, index) => ({
        id: index + 1,
        title: `Show ${index + 1}`,
        thumbnail: `http://localhost:6006/images/show${index + 1}.png`,
        rank: index + 1,
      })),
      variant: 'top10',
    },
  },
};
