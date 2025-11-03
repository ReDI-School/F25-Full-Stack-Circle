import { cva } from 'class-variance-authority';
import styles from './VideoControlButton.module.css';
import type { IconName, VideoControlButtonProps } from './VideoControlButton.types';
import Play from '../../assets/icons/play.svg?react';
import Pause from '../../assets/icons/pause.svg?react';
import Rewind from '../../assets/icons/rewind.svg?react';
import Forward from '../../assets/icons/forward.svg?react';
import MuteVolume from '../../assets/icons/muteVolume.svg?react';
import MediumVolume from '../../assets/icons/middleVolume.svg?react';
import HighVolume from '../../assets/icons/highVolume.svg?react';
import Next from '../../assets/icons/next.svg?react';
import EpisodeList from '../../assets/icons/episodeList.svg?react';
import Caption from '../../assets/icons/caption.svg?react';
import Playback from '../../assets/icons/playback.svg?react';
import Fullscreen from '../../assets/icons/fullscreen.svg?react';
import type React from 'react';

const styledControlButton = cva(styles.controlButton);
const styledControlIcon = cva(styles.controlIcon);

const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  play: Play,
  pause: Pause,
  rewind: Rewind,
  forward: Forward,
  'mute-volume': MuteVolume,
  'medium-volume': MediumVolume,
  'high-volume': HighVolume,
  next: Next,
  'episode-list': EpisodeList,
  caption: Caption,
  playback: Playback,
  fullscreen: Fullscreen,
};

const VideoControlButton = ({ icon, onClick, ariaLabel }: VideoControlButtonProps) => {
  const Icon = iconMap[icon];

  return (
    <button
      className={styledControlButton()}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <Icon className={styledControlIcon()} aria-label="control button icon" />
    </button>
  );
};

export default VideoControlButton;
