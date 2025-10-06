export const routePaths = {
  home: () => '/',
  shows: () => '/shows',
  news: () => '/news',
  myList: () => '/list',
  language: () => '/language',
};

export const routeLabels: Record<keyof typeof routePaths, string> = {
  home: 'home',
  shows: 'TV Shows',
  news: 'News & Popular',
  myList: 'My List',
  language: 'Browse By Language',
};
