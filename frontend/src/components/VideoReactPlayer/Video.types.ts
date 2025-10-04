interface VideoProps {
  /**
   * The url or path of a video
   */
  src: string;

  /**
   * Set to true or false to play or pause the media
   */
  playing?: boolean;

  /**
   * Set to true or false to loop the media
   * Default: false
   */
  loop?: boolean;

  /**
   * Set the volume of the player, between 0 and 1
   * ◦ null uses default volume on all players
   */
  volume?: number;

  /**
   * Set the playback rate of the player
   * Default: 1
   */
  playbackRate?: number | undefined;

  /**
   * Set the width of the player
   * Default: 320px
   */
  width?: string;

  /**
   * Set the height of the player
   * Default: 180px
   */
  height?: string;

  /**
   * Set to true to show just the video thumbnail, which loads the full player on click
   * ◦ Pass in an image URL to override the preview image
   * Default: false
   */
  light?: boolean | string;

  /**
   * Element or component to use as the play icon in light mode
   */
  playIcon?: React.ReactElement;

  /**
   * Sets the current time
   */
  currentTime?: number;
}

export type { VideoProps };
