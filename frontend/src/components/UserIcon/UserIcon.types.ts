interface UserIconProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  size?: 'big' | 'small';
  userName?: string | React.ReactNode;
  icon?: string | React.ReactNode;
  iconOnly?: boolean;
  'aria-label'?: string;
}

export type { UserIconProps };
