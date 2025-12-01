interface User {
  id: string;
  name: string;
  avatar: string;
}

interface WhoIsWatchingProps {
  onUserClick: VoidFunction;
}

export type { User, WhoIsWatchingProps };
