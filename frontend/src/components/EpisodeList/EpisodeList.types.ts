interface Episode {
  id: string | number;
  number: number;
  thumbnail: string;
  title: string;
  description?: string;
  duration?: string;
}

interface EpisodeListProps {
  episodes?: Episode[];
  onEpisodeClick?: (episode: Episode) => void;
  currentEpisodeId?: string | number;
  className?: string;
}

interface EpisodeListCardProps {
  episode: Episode;
  onClick?: (episode: Episode) => void;
  isCurrent?: boolean;
}

export type { Episode, EpisodeListProps, EpisodeListCardProps };
