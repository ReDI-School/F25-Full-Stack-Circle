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
  duration?: string;
  thumbnail: string;
  isNew?: boolean;
  progress?: number;
  rank?: number;
  seasonInfo?: string;
}

export interface MovieCardsProps {
  cards: MovieCardData[];
  variant?: MovieCardVariant;
  onCardClick?: (id: number) => void;
  onPlayClick?: (id: number) => void;
}
