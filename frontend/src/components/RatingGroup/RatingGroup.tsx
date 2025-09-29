import type { RatingGroupProps } from './RatingGroup.types';
import styles from './RatingGroup.module.css';
import { cva } from 'class-variance-authority';

const styledRatingGroup = cva(styles.ratingGroup, {
  variants: {
    size: {
      small: styles['ratingGroup--small'],
      medium: styles['ratingGroup--medium'],
      large: styles['ratingGroup--large'],
    },
  },
});

const RatingGroup = ({ children, size = 'medium', className }: RatingGroupProps) => {
  return <div className={styledRatingGroup({ size, className })}>{children}</div>;
};

export default RatingGroup;
