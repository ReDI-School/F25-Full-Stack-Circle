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
   * The type of button (currently only SignIn is supported)
   */
  type?: 'SignIn';

  /**
   * The size of the button
   */
  size?: 'Large' | 'Small';

  /**
   * The state of the button
   */
  state?: 'Default' | 'Hover';

  /**
   * Whether the button should stretch to the width of its container
   */
  stretch?: boolean;
}

export type { ButtonProps };
