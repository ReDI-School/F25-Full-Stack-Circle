export interface HeaderProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  /**
   * The type of header to display.
   * @default 'private'
   */
  type: 'private' | 'public' | 'auth';
}
