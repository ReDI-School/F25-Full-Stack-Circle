import type { PlaybackSpeedProps } from '../PlaybackSpeed';
import type { ProgressBarProps } from '../ProgressBar/index';
import type { VolumeSliderProps } from '../VolumeSlider/index';
import type { Episode } from '../EpisodeList/EpisodeList.types';

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
   * The Playback Speed component's props.
   */
  playbackSpeedProps: PlaybackSpeedProps;

  /**
   * The Title of the video.
   */
  title: string;

  /**
   * The state of the video. This will toggle Play icon to Pause icon and vice versa.
   */
  isPlaying: boolean | undefined;

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

  /**
   * List of episodes to display in the episode list popup.
   */
  episodes?: Episode[];

  /**
   * The event that triggers when an episode is clicked.
   */
  onEpisodeClick?: (episode: Episode) => void;

  /**
   * The current episode ID.
   */
  currentEpisodeId?: string | number;
}

export type { VideoControlBarProps };
