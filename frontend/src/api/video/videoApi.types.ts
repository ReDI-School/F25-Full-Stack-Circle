interface VideoData {
  name?: string;
  duration?: number;
  image?: string;
  url: string;
  movie_title_id?: number;
  season_id?: number;
  episode_number?: number;
  title: {
    id: number;
    name: string;
    type: 'MOVIE' | 'SERIES';
  };
}

export type { VideoData };
