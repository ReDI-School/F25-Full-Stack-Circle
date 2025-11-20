import type { ProgressBarProps } from '../ProgressBar/index';
import type { VolumeSliderProps } from '../VolumeSlider/index';

interface VideoControlBarProps {
  /**
   * The Progress bar component's props.
   */
  progressBarProps: ProgressBarProps;

  /**
   * The Progress bar component's props.
   */
  volumeSliderProps: VolumeSliderProps;

  /**
   * The Title of the video.
   */
  title: string;

  /**
   * The state of the video. This will toggle Play icon to Pause icon and vice versa.
   */
  isPlaying: boolean;

  /**
   * The event that triggers when the Play/Pause button is clicked.
   */
  onPlayButtonClick: () => void;

  /**
   * The event that triggers when the Rewind button is clicked.
   */
  onRewindButtonClick: () => void;

  /**
   * The event that triggers when the Forward button is clicked.
   */
  onForwardButtonClick: () => void;

  /**
   * The event that triggers when the Next button is clicked.
   */
  onNextButtonClick: () => void;

  /**
   * The event that triggers when the Next button is clicked.
   */
  onEpisodeListButtonClick: () => void;

  /**
   * The event that triggers when the Caption button is clicked.
   */
  onCaptionButtonClick: () => void;

  /**
   * The event that triggers when the Playback button is clicked.
   */
  onPlaybackButtonClick: () => void;

  /**
   * The event that triggers when the Fullscreen button is clicked.
   */
  onFullscreenButtonClick: () => void;
}

export type { VideoControlBarProps };
