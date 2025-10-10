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

export type { Episode, EpisodeListProps };
