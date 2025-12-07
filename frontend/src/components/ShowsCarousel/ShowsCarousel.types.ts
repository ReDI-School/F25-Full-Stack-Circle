import type { MovieCardsProps } from '../MovieCards';

export interface ShowsCarouselProps {
  title?: string;
  images: string[];
  movieCard: MovieCardsProps;
  className?: string;
}
