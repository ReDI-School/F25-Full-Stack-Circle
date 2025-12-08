import { mockData } from '../../mock/mockData';
import { sharedStyles } from '../../shared';
import ShowCardsContainer from '../../components/ShowCardsContainer';

const Shows = () => {
  return (
    <div className={sharedStyles.pageContainer}>
      <h1 className={sharedStyles.pageTitle}>TV Shows</h1>
      <ShowCardsContainer cards={mockData.filter((show) => show.type === 'SERIES')} />
    </div>
  );
};

export default Shows;
