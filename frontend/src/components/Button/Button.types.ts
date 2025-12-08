interface ButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  icon?: string | React.ReactNode;
  iconPosition?: 'before' | 'after';
  iconOnly?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  stretch?: boolean;
}

export type { ButtonProps };
