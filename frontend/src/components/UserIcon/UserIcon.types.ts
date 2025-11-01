interface UserIconProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'big' | 'small';
  userName?: string | React.ReactNode;
  avatar?: string | React.ReactNode;
  'aria-label'?: string;
}

export type { UserIconProps };
