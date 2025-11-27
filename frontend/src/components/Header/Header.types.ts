export interface HeaderProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  type: 'private' | 'public' | 'auth';
}
