import { cva } from 'class-variance-authority';
import styles from './VideoControlBar.module.css';
import type { VideoControlBarProps } from './VideoControlBar.types';
import { ProgressBar } from '../ProgressBar';
import { VideoControlButton } from '../VideoControlButton';
import { VolumeSlider } from '../VolumeSlider';
import { PlaybackSpeed } from '../PlaybackSpeed';
import { useEffect, useRef, useState } from 'react';
import type { Episode } from '../EpisodeList/EpisodeList.types';

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
  episodes,
  onEpisodeClick,
  currentEpisodeId,
}: VideoControlBarProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const episodeListRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);
  const [showEpisodeList, setShowEpisodeList] = useState(false);

  const onPlaybackButtonClick = () => {
    setShowPlaybackSpeed((prev) => !prev);
    setShowEpisodeList(false);
  };

  const handleEpisodeListButtonClick = () => {
    if (episodes && episodes.length > 0) {
      setShowEpisodeList((prev) => !prev);
      setShowPlaybackSpeed(false);
    }
    onEpisodeListButtonClick();
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
      const episodeList = episodeListRef.current;
      const target = e.target as HTMLElement;

      if (wrapper && !wrapper.contains(target)) {
        setShowPlaybackSpeed(false);
      }

      if (showEpisodeList && episodeList && !episodeList.contains(target)) {
        const clickedButton = target.closest('button');
        const isEpisodeListButton =
          clickedButton &&
          Array.from(clickedButton.querySelectorAll('*')).some((el) =>
            el.getAttribute('class')?.includes('episode-list')
          );
        if (!isEpisodeListButton) {
          setShowEpisodeList(false);
        }
      }
    };

    if (showEpisodeList || showPlaybackSpeed) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showEpisodeList, showPlaybackSpeed]);

  const handleEpisodeClick = (episode: Parameters<NonNullable<typeof onEpisodeClick>>[0]) => {
    if (onEpisodeClick) {
      onEpisodeClick(episode);
    }
    setShowEpisodeList(false);
  };

  return (
    <div className={styledVideoControl()}>
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
            <VideoControlButton icon="episode-list" onClick={handleEpisodeListButtonClick} />
            <VideoControlButton icon="playback" onClick={onPlaybackButtonClick} />
            <VideoControlButton icon="fullscreen" onClick={onFullscreenButtonClick} />
          </div>
          {showEpisodeList && episodes && episodes.length > 0 && (
            <div ref={episodeListRef} className={styles.episodeListWrapper}>
              <h3 className={styles.episodeListTitle}>Episodes</h3>
              <ul className={styles.episodeList}>
                {episodes.map((episode: Episode) => {
                  const isCurrent = episode.id === currentEpisodeId;
                  return (
                    <li
                      key={episode.id}
                      className={`${styles.episodeListItem} ${isCurrent ? styles.currentEpisode : ''}`}
                      onClick={() => handleEpisodeClick(episode)}
                    >
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className={styles.episodeThumbnail}
                      />
                      <span className={styles.episodeTitle}>{episode.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoControlBar;
