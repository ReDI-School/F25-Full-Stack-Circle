interface ButtonProps {
  /**
   * The label of the button
   */
  children: React.ReactNode;

  /**
   * The function to be called when the button is clicked
   */
  onClick?: () => void;

  /**
   * Whether the button should stretch to the width of its container
   */
  stretch?: boolean;

  /**
   * Whether the button should be disabled
   */
  disabled?: boolean;

  variant?: 'primary' | 'secondary' | 'white' | 'outlined';
  size?: 'medium' | 'large';
  icon?: string | React.ReactNode;
  iconPosition?: 'before' | 'after';
  iconOnly?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export type { ButtonProps };
