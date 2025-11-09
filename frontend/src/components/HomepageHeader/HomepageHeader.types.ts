interface HomepageHeaderProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  type: 'LandingPage' | 'HomePage';
  onSignIn?: () => void;
  onLanguageChange?: (language: string) => void;
  userAvatar?: string;
  currentPage?: string;
}

export type { HomepageHeaderProps };
