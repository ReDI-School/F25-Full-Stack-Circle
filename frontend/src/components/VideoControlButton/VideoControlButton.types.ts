interface VideoControlButtonProps {
  /**
   * The icon type to display
   */
  icon: IconName;

  /**
   * The function to be called when the button is clicked
   */
  onClick?: () => void;

  /**
   * The function to be called when the button is hovered
   */
  onHover?: () => void;

  /**
   * Accessibility label for screen readers
   */
  ariaLabel?: string;
}

type IconName =
  | 'play'
  | 'pause'
  | 'rewind'
  | 'forward'
  | 'mute-volume'
  | 'medium-volume'
  | 'high-volume'
  | 'next'
  | 'episode-list'
  | 'caption'
  | 'playback'
  | 'fullscreen';

export type { VideoControlButtonProps, IconName };
