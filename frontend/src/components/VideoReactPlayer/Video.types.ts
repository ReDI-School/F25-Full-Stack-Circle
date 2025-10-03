
interface VideoProps {
  src: string;
  playing?: boolean;
  light: boolean | string;
  playIcon: React.ReactElement;
  width?: number;
  height?: number;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
  volume?: number;
}

export type { VideoProps };
