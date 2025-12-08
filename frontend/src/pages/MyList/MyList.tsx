import { mockData } from '../../mock/mockData';
import { sharedStyles } from '../../shared';
import ShowCardsContainer from '../../components/ShowCardsContainer';

const MyList = () => {
  return (
    <div className={sharedStyles.pageContainer}>
      <h1 className={sharedStyles.pageTitle}>My List</h1>
      <ShowCardsContainer cards={mockData.filter((movie) => movie.isInPrivateList)} />
    </div>
  );
};

export default MyList;
