import type { RatingGroupProps } from './RatingGroup.types';
import styles from './RatingGroup.module.css';

const RatingGroup = ({ children }: RatingGroupProps) => {
  return <div className={styles.ratingGroup}>{children}</div>;
};

export default RatingGroup;
