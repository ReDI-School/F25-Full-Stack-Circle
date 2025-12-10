export type HeaderType = 'private' | 'public' | 'auth';

export interface HeaderProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  type: HeaderType;
}
