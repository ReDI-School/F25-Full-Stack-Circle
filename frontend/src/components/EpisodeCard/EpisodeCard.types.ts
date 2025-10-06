interface EpisodeCardProps {
  episode: {
    id: string | number;
    number: number;
    thumbnail: string;
    title: string;
    description?: string;
    duration?: string;
  };
  onClick?: (episode: {
    id: string | number;
    number: number;
    thumbnail: string;
    title: string;
    description?: string;
    duration?: string;
  }) => void;
  isCurrent?: boolean;
  className?: string;
}

export type { EpisodeCardProps };
