export type MovieCardVariant =
  | 'default'
  | 'moreLikeThis'
  | 'episodePreview'
  | 'trailerPreview'
  | 'playerPreview'
  | 'top10'
  | 'continueWatching';

export interface MovieCardData {
  id: number;
  title?: string;
  duration?: number;
  thumbnail: string;
  isNew?: boolean;
  progress?: number;
  rank?: number;
  seasonInfo?: string;
  language?: string | string[];
}

export interface MovieCardsProps {
  cards: MovieCardData[];
  variant?: MovieCardVariant;
  onCardClick?: (id: number) => void;
  onPlayClick?: (id: number) => void;
  display?: 'grid' | 'carousel';
}
