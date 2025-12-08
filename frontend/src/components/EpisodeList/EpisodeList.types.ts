interface Episode {
  id: string | number;
  url: string;
  number: number;
  thumbnail: string;
  title: string;
  description?: string;
  duration?: number;
}

interface EpisodeListProps {
  episodes?: Episode[];
  onEpisodeClick?: (episode: Episode) => void;
  currentEpisodeId?: string | number;
  className?: string;
}

export type { Episode, EpisodeListProps };
