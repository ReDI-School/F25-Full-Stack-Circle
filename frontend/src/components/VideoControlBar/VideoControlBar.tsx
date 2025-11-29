import { cva } from 'class-variance-authority';
import styles from './VideoControlBar.module.css';
import type { VideoControlBarProps } from './VideoControlBar.types';
import { ProgressBar } from '../ProgressBar';
import { VideoControlButton } from '../VideoControlButton';
import { VolumeSlider } from '../VolumeSlider';
import { PlaybackSpeed } from '../PlaybackSpeed';
import { useEffect, useRef, useState } from 'react';

const styledVideoControl = cva(styles.videoControl);
const styledGridWrapper = cva(styles.gridWrapper);
const styledControlButtonWrapper = cva(styles.controlButtonWrapper);
const styledPlaybackSpeedWrapper = cva(styles.playbackSpeedWrapper);

const VideoControlBar = ({
  progressBarProps,
  volumeSliderProps,
  playbackSpeedProps,
  title,
  isPlaying,
  onPlayButtonClick,
  onRewindButtonClick,
  onForwardButtonClick,
  onNextButtonClick,
  onEpisodeListButtonClick,
  onCaptionButtonClick,
  onFullscreenButtonClick,
}: VideoControlBarProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);
  const onPlaybackButtonClick = () => {
    setShowPlaybackSpeed((prev) => !prev);
  };

  const handlePlaybackSpeedChange = (value: number) => {
    if (playbackSpeedProps.onChange) playbackSpeedProps.onChange(value);

    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setShowPlaybackSpeed(false);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (wrapper && !wrapper.contains(e.target as Node)) {
        setShowPlaybackSpeed(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styledVideoControl()}>
      <ProgressBar {...progressBarProps} />
      <div ref={wrapperRef} className={styledGridWrapper()}>
        {showPlaybackSpeed && (
          <div className={styledPlaybackSpeedWrapper()}>
            <PlaybackSpeed {...playbackSpeedProps} onChange={handlePlaybackSpeedChange} />
          </div>
        )}
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
