import { mockData } from '../../mock/mockData';
import { sharedStyles } from '../../shared';
import ShowCardsContainer from '../../components/ShowCardsContainer';

const News = () => {
  return (
    <div className={sharedStyles.pageContainer}>
      <h1 className={sharedStyles.pageTitle}>News & Popular</h1>
      <ShowCardsContainer cards={mockData.filter((movie) => movie.isTrending || movie.isNew)} />
    </div>
  );
};

export default News;
