import type { MaturityRatingProps } from './MaturityRating.types';
//import styles from './MaturityRating.module.css';

const MaturityRating = ({ rating }: MaturityRatingProps) => {
  return <div>{rating}</div>;
};

export default MaturityRating;
