interface MaturityRatingProps {
  rating?: Ratings;
}

type Ratings =
  | 'G'
  | 'NC-17'
  | 'PG'
  | 'PG-13'
  | 'R'
  | 'TV-14'
  | 'TV-G'
  | 'TV-MA'
  | 'TV-PG'
  | 'TV-Y7'
  | 'TV-Y';

// Maps Maturity Rating to a value without a dash similar to Prisma Enum
const mappedMaturityRating: Record<string, Ratings> = {
  G: 'G',
  NC17: 'NC-17',
  PG: 'PG',
  PG13: 'PG-13',
  R: 'R',
  TV14: 'TV-14',
  TVG: 'TV-G',
  TVMA: 'TV-MA',
  TVPG: 'TV-PG',
  TVY7: 'TV-Y7',
  TVY: 'TV-Y',
};

export type { MaturityRatingProps };
export { mappedMaturityRating };
