import type { RefObject } from "react";

interface VideoPlayerProps {
  /**
   * The url or path of a video.
   */
  src: string;

  /**
   * The reference to the Video Player. Used to control the states of the Video Player. 
   */
  playerRef: RefObject<HTMLVideoElement | null>

  /**
   * Set to true or false to play or pause the media.
   */
  playing?: boolean;

  /**
   * Set to true or false to loop the media.
   * Default: false
   */
  loop?: boolean;

  /**
   * Set the volume of the player, between 0 and 1.
   * `null` uses default volume on all players.
   */
  volume?: number;

  /**
   * Set the playback rate of the player.
   * Default: 1
   */
  playbackRate?: number | undefined;

  /**
   * Set the width of the player.
   * Default: 320px
   */
  width?: string;

  /**
   * Set the height of the player.
   * Default: 180px
   */
  height?: string;

  /**
   * Set to true to show just the video thumbnail, which loads the full player on click.
   * Pass in an image URL or Element to override the preview image.
   * Default: false
   */
  light?: boolean | string | React.ReactElement;

  /**
   * Element or component to use as the play icon in light mode.
   */
  playIcon?: React.ReactElement;
  
  /**
   *  Called when user clicks the light mode preview.
   */
  onClickPreview?: () => void;

  /**
   * Called when media is loaded and ready to play.
   */
  onReady?: () => void;

  /**
   * Called when media starts playing.
   */
  onStart?: () => void;

  /**
   * Called when the playing prop is set to true.
   */
  onPlay?: () => void;

  /**
   * Called when media actually starts playing.
   */
  onPlaying?: () => void;

  /**
   * Called when media is paused.
   */
  onPause?: () => void;

  /**
   * Called when playback rate of the player changed.
   */
  onRateChange?: () => void;

  /**
   * Called when media is seeking.
   */
  onSeeking?: () => void;

  /**
   * Called when media has finished seeking.
   */
  onSeeked?: () => void;

  /**
   * Called when media finishes playing.
   */
  onEnded?: () => void;

  /**
   * Called when an error occurs whilst attempting to play media.
   */
  onError?: () => void;

  /**
   * Called when the media's current time changes.
   */
  onTimeUpdate?: () => void;

  /**
   * Called when media data is loaded.
   */
  onProgress?: () => void;

  /**
   * Callback containing duration of the media, in seconds.
   */
  onDurationChange?: () => void;
}

export type { VideoPlayerProps };
