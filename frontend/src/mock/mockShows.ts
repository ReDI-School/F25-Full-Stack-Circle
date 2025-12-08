export type MockShow = {
  title: string;
  ids: number[];
};

export const mockShows: MockShow[] = [
  {
    title: 'Matched to you',
    ids: [12, 3, 18, 7, 25, 14, 9, 33, 5, 21, 16, 28, 2, 35, 11, 22, 8, 30, 19, 6], // Shows in private list
  },
  {
    title: 'Top 10',
    ids: [30, 18, 5, 26, 12, 34, 9, 21, 3, 14],
  },
  {
    title: 'New on Netflix',
    ids: [27, 15, 32, 3, 24, 35, 14, 8, 21, 2, 29, 11, 33, 22, 1, 26, 31, 18, 34, 23], // New releases
  },
  {
    title: "We think you'll love these",
    ids: [22, 8, 31, 15, 4, 28, 11, 33, 7, 18, 24, 35, 9, 20, 1, 27, 13, 26, 6, 10], // Mix of acclaimed movies
  },
  {
    title: 'Animation',
    ids: [23, 7, 16, 30, 11, 24, 1, 19, 34, 5, 28, 14, 9, 32, 18, 8, 26, 3, 21, 12], // Animation shows and movies
  },
  {
    title: 'Inspiring Movies',
    ids: [35, 17, 8, 25, 4, 32, 10, 22, 1, 29, 15, 34, 20, 6, 27, 13, 2, 30, 23, 5], // Inspiring/uplifting content
  },
  {
    title: 'Continue Watching',
    ids: [18, 25, 7, 33, 11, 4, 19, 27, 14, 2, 30, 9, 21, 6, 15, 24, 10, 1, 20, 3], // Series to continue
  },
  {
    title: 'Watch In One Weekend',
    ids: [28, 5, 16, 33, 11, 22, 2, 19, 8, 29, 14, 6, 25, 1, 17, 12, 32, 9, 4, 15], // Limited series and documentaries
  },
  {
    title: 'Critically Acclaimed Movies',
    ids: [31, 13, 22, 7, 26, 4, 34, 16, 29, 8, 19, 2, 35, 10, 28, 11, 23, 6, 32, 1], // High-rated movies
  },
  {
    title: "Today's Fresh Picks for You",
    ids: [34, 16, 21, 9, 27, 3, 30, 12, 24, 6, 35, 15, 20, 8, 31, 2, 18, 11, 5, 14], // Trending and recent
  },
  {
    title: 'Adult Animation',
    ids: [30, 18, 5, 26, 12, 34, 9, 21, 3, 14, 28, 7, 23, 16, 32, 11, 19, 8, 24, 1], // Mature animation content
  },
];
