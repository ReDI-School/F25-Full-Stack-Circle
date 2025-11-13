import type { Episode } from '../EpisodeList/EpisodeList.types';

interface EpisodeCardProps {
  episode: Episode;
  onClick?: (episode: Episode) => void;
  isCurrent?: boolean;
  className?: string;
}

export type { EpisodeCardProps };
