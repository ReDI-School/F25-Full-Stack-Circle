interface IconButtonProps {
  /**
   * The icon type to display
   */
  icon: IconName;

  /**
   * The visual variant of the button
   */
  variant?: 'filled' | 'outlined';

  /**
   * The color theme of the button
   */
  theme?: 'primary' | 'secondary';

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * Whether the button is in a selected state
   */
  selected?: boolean;

  /**
   * The function to be called when the button is clicked
   */
  onClick?: () => void;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Accessibility label for screen readers
   */
  ariaLabel?: string;

  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
}

type IconName =
  | 'play'
  | 'plus'
  | 'expand'
  | 'mute'
  | 'thumbs-up'
  | 'thumbs-down'
  | 'double-thumbs-up';

export type { IconButtonProps, IconName };
