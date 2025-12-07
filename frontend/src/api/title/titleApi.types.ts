interface Title {
  id: number;
  name: string;
  type: 'MOVIE' | 'SERIES';
  cast: string[];
  category: [
    {
      name: string;
      age_restriction: string;
    },
  ];
  genre: string[];
  synopsis: string;
  season: [
    {
      id: number;
      number: number;
      thumbnail: string;
      video: [
        {
          id: number;
          name?: string;
          image?: string | null;
          duration: number;
          url: string;
          episode_number?: number;
        },
      ];
    },
  ];
  video: {
    id: number;
    name?: string;
    image?: string | null;
    duration: number;
    url: string;
    episode_number?: number;
  };
}

export type { Title };
