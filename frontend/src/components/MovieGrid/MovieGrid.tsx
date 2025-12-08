import React from 'react';
import MovieCards from '../MovieCards/MovieCards';
import type { MovieCardData } from '../MovieCards/MovieCards.types';

interface MovieGridProps {
  movies: MovieCardData[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return <MovieCards cards={movies} />;
};

export default MovieGrid;
