import MaturityRating from './MaturityRating';
import styles from './MaturityRating.module.css';

interface MaturityRatingContainerProps {
  ratings: Array<
    'G' | 'NC-17' | 'PG' | 'PG-13' | 'R' | 'TV-14' | 'TV-G' | 'TV-MA' | 'TV-PG' | 'TV-Y7' | 'TV-Y'
  >;
}

const MaturityRatingContainer = ({ ratings }: MaturityRatingContainerProps) => {
  return (
    <div className={styles.container}>
      {ratings.map((rating, index) => (
        <MaturityRating key={index} rating={rating} />
      ))}
    </div>
  );
};

export default MaturityRatingContainer;
