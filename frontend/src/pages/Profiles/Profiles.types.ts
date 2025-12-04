interface Profile {
  id: string;
  name: string;
  avatar: string;
}

interface ProfilesProps {
  onProfileClick: VoidFunction;
}

export type { Profile, ProfilesProps };
