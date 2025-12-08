interface Video {
  id: number;
  name?: string;
  image?: string;
  duration: number;
  url: string;
  episodeNumber?: number;
}

interface MovieDialogProps {
  titleId: number;
  name: string;
  type: 'MOVIE' | 'SERIES';
  category: string[];
  videos?: Video[]; // episodes for series or a single video for movie
}

export type { MovieDialogProps, Video };
