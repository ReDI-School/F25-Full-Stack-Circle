import { useState } from 'react';
import MovieCards from '../MovieCards/MovieCards';
import ShowDetailsDialog from '../ShowDetailsDialog/ShowDetailsDialog';
import type { MockData } from '../../mock/mockData';
import type { ShowCardsContainerProps } from './ShowCardsContainer.types';

const ShowCardsContainer = ({ cards, variant }: ShowCardsContainerProps) => {
  const [selectedShow, setSelectedShow] = useState<MockData | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (id: number) => {
    const show = cards.find((item) => item.id === id);
    if (show) {
      setSelectedShow(show);
      setIsDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setSelectedShow(undefined);
    setIsDialogOpen(false);
  };

  return (
    <>
      <MovieCards onCardClick={handleCardClick} cards={cards} variant={variant} />
      {selectedShow && (
        <ShowDetailsDialog
          title={selectedShow.title ?? ''}
          description={selectedShow?.details?.description ?? ''}
          episodes={selectedShow?.details?.episodes}
          videoUrl={selectedShow?.details?.videoUrl ?? ''}
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          titleObject={{
            id: selectedShow.id,
            name: selectedShow.details?.title ?? '',
            type: selectedShow.type,
            cast: selectedShow.details?.cast ?? [],
            category: [{ name: '18+', age_restriction: '18+' }],
            genre: selectedShow.details?.genre ?? [],
            synopsis: selectedShow.details?.description ?? '',
            season: [
              {
                id: 1,
                number: 1,
                thumbnail: '',
                video: [{ id: 1, name: '', duration: 100, url: '', episode_number: 1 }],
              },
            ],
            video: { id: 1, name: '', duration: 100, url: '', episode_number: 1 },
          }}
        />
      )}
    </>
  );
};

export default ShowCardsContainer;
