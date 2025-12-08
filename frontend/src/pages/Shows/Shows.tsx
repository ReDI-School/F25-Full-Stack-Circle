import MovieCards from '../../components/MovieCards/MovieCards';
import { mockData } from '../../mock/mockData';
import { sharedStyles } from '../../shared';

const Shows = () => {
  return (
    <div className={sharedStyles.pageContainer}>
      <h1 className={sharedStyles.pageTitle}>TV Shows</h1>
      <MovieCards cards={mockData.filter((show) => show.type === 'SERIES')} />
    </div>
  );
};

export default Shows;
