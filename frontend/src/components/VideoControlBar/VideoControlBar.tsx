import { cva } from 'class-variance-authority';
import styles from './VideoControlBar.module.css';
import type { VideoControlBarProps } from './VideoControlBar.types';
import { ProgressBar } from '../ProgressBar';
import { VideoControlButton } from '../VideoControlButton';
import { VolumeSlider } from '../VolumeSlider';

const styledVideoControl = cva(styles.videoControl);
const styledGridWrapper = cva(styles.gridWrapper);
const styledControlButtonWrapper = cva(styles.controlButtonWrapper);

const VideoControlBar = ({
  progressBarProps,
  volumeSliderProps,
  title,
  isPlaying,
  onPlayButtonClick,
  onRewindButtonClick,
  onForwardButtonClick,
  onNextButtonClick,
  onEpisodeListButtonClick,
  onCaptionButtonClick,
  onPlaybackButtonClick,
  onFullscreenButtonClick,
}: VideoControlBarProps) => {
  return (
    <div className={styledVideoControl()}>
      <ProgressBar {...progressBarProps} />
      <div className={styledGridWrapper()}>
        <div className={styledControlButtonWrapper()}>
          <VideoControlButton icon={isPlaying ? 'pause' : 'play'} onClick={onPlayButtonClick} />
          <VideoControlButton icon="rewind" onClick={onRewindButtonClick} />
          <VideoControlButton icon="forward" onClick={onForwardButtonClick} />
          <VolumeSlider {...volumeSliderProps} />
        </div>
        <span>{title}</span>
        <div className={styledControlButtonWrapper()}>
          <VideoControlButton icon="next" onClick={onNextButtonClick} />
          <VideoControlButton icon="episode-list" onClick={onEpisodeListButtonClick} />
          <VideoControlButton icon="caption" onClick={onCaptionButtonClick} />
          <VideoControlButton icon="playback" onClick={onPlaybackButtonClick} />
          <VideoControlButton icon="fullscreen" onClick={onFullscreenButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default VideoControlBar;
