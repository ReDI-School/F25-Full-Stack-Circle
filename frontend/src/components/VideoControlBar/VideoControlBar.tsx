import { cva } from 'class-variance-authority';
import styles from './VideoControlBar.module.css';
import type { VideoControlBarProps } from './VideoControlBar.types';

const styledWrapper = cva(styles.wrapper);

const VideoControlBar = ({ children }: VideoControlBarProps) => {
  return <div className={styledWrapper()}>{children}</div>;
};

export default VideoControlBar;
