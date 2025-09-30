import type { MaturityRatingProps } from './MaturityRating.types';
import styles from './MaturityRating.module.css';

const MaturityRating = ({ rating }: MaturityRatingProps) => {
  return <div className={styles.rating}>{rating}</div>;
};

export default MaturityRating;
