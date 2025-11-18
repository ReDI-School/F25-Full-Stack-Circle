import type { PathMatch } from 'react-router';
import { matchPath, useLocation } from 'react-router';

interface Return {
  isMatched: boolean;
  matchedList: PathMatch<string>[];
}

const useRoutesListMatch = (paths: string[] = []) => {
  const { pathname } = useLocation();

  return paths.reduce(
    (acc: Return, path: string): Return => {
      const matchedPath = matchPath({ path }, pathname);

      if (matchedPath)
        return {
          isMatched: acc.isMatched || matchedPath.pathname === pathname,
          matchedList: [...acc.matchedList, matchedPath],
        };

      return acc;
    },
    {
      isMatched: false,
      matchedList: [],
    }
  );
};

export default useRoutesListMatch;
