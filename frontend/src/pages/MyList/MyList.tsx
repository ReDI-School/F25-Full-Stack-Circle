import MovieCards from '../../components/MovieCards/MovieCards';
import { mockData } from '../../mock/mockData';
import { sharedStyles } from '../../shared';

const MyList = () => {
  return (
    <div className={sharedStyles.pageContainer}>
      <h1 className={sharedStyles.pageTitle}>My List</h1>
      <MovieCards cards={mockData.filter((movie) => movie.isInPrivateList)} />
    </div>
  );
};

export default MyList;
