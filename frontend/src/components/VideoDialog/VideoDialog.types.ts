import type { Episode } from '../EpisodeList/EpisodeList.types';

export interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  episodes?: Episode[];
  onEpisodeClick?: (episode: Episode) => void;
  currentEpisodeId?: string | number;
}

