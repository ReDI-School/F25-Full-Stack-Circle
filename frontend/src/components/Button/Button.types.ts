interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'outlined';
  size?: 'medium' | 'large';
  icon?: string | React.ReactNode;
  iconPosition?: 'before' | 'after';
  iconOnly?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  stretch?: boolean; // Whether the button should stretch to the width of its container
}

export type { ButtonProps };
