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
  className?: string;
}

interface EpisodeListCardProps {
  episode: Episode;
  onClick?: (episode: Episode) => void;
}

export type { Episode, EpisodeListProps, EpisodeListCardProps };



