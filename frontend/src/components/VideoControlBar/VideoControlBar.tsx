import { cva } from 'class-variance-authority';
import styles from './VideoControlBar.module.css';
import type { VideoControlBarProps } from './VideoControlBar.types';
import { ProgressBar } from '../ProgressBar';
import { VideoControlButton } from '../VideoControlButton';
import { VolumeSlider } from '../VolumeSlider';
import { PlaybackSpeed } from '../PlaybackSpeed';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { useLocation, useNavigate } from 'react-router';

const styledVideoControl = cva(styles.videoControl);
const styledGridWrapper = cva(styles.gridWrapper);
const styledControlButtonWrapper = cva(styles.controlButtonWrapper);

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
  onFullscreenButtonClick,
}: VideoControlBarProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onPlaybackButtonClick = () => {
    setShowPlaybackSpeed((prev) => !prev);
  };

  const handlePlaybackSpeedChange = (value: number) => {
    if (playbackSpeedProps.onChange) playbackSpeedProps.onChange(value);

    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setShowPlaybackSpeed(false);
    }, 300);
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

  const handleBackButtonClick = () => {
    if (location.key === 'default') {
      // If there is no history to go back to, return to home
      navigate('/browse');
    } else {
      navigate(-1); // Go back
    }
  };

  return (
    <div className={styledVideoControl()}>
      <div>
        <Button
          className={styles.backButton}
          variant="secondary"
          iconPosition="before"
          size="small"
          icon="back"
          iconOnly
          onClick={handleBackButtonClick}
        >
          Back
        </Button>
      </div>
      <div className={styles.bottomControlsWrapper}>
        <ProgressBar {...progressBarProps} />
        <div ref={wrapperRef} className={styledGridWrapper()}>
          {showPlaybackSpeed && (
            <div className={styles.playbackSpeedWrapper}>
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
            <VideoControlButton icon="playback" onClick={onPlaybackButtonClick} />
            <VideoControlButton icon="fullscreen" onClick={onFullscreenButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoControlBar;
