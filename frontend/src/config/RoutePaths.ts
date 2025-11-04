type RouteConfig = () => [string, string];

export const routePaths: Record<string, RouteConfig> = {
  home: () => ['Home', '/'],
  tvShows: () => ['TV Shows', '/tv-shows'],
  movies: () => ['Movies', '/movies'],
  newAndPopular: () => ['New & Popular', '/new-and-popular'],
  myList: () => ['My List', '/my-list'],
  browseByLanguages: () => ['Browse by Languages', '/browse-by-languages'],
};

// Helper to get navigation items
export const getNavigationItems = () => {
  return Object.values(routePaths).map((route) => {
    const [label, path] = route();
    return { label, path };
  });
};
