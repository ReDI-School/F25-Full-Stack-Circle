
interface VideoProps {
  videoId: string;
  width?: number;
  height?: number;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

export type { VideoProps };
