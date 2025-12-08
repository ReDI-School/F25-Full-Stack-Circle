import type { MovieCardVariant } from '../MovieCards/MovieCards.types';
import type { MockData } from '../../mock/mockData';

export interface ShowCardsContainerProps {
  cards: MockData[];
  variant?: MovieCardVariant;
}
