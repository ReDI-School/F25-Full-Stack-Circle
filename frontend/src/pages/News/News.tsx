import MovieCards from '../../components/MovieCards/MovieCards';
import { mockData } from '../../mock/mockData';
import { sharedStyles } from '../../shared';

const News = () => {
  return (
    <div className={sharedStyles.pageContainer}>
      <h1 className={sharedStyles.pageTitle}>News & Popular</h1>
      <MovieCards cards={mockData.filter((movie) => movie.isTrending || movie.isNew)} />
    </div>
  );
};

export default News;
