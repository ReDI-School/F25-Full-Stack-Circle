import type { Title } from '../../api/title/titleApi.types';
import type { Episode } from '../EpisodeList';

export interface ShowDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
  titleObject?: Title;
  description: string;
  episodes?: Episode[];
}
