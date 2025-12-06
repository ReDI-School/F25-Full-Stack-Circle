import type { Episode } from '../EpisodeList';

export interface ShowDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
  description: string;
  episodes?: Episode[];
}
