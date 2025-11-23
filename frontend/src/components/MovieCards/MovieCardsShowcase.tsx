import React from 'react';
import { MovieCards } from '.';
import type { MovieCardData } from './MovieCards.types.ts';
import styles from './MovieCards.module.css';

const thumb = (w: number, h: number) =>
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='%23232323'/><rect width='100%' height='36' fill='url(%23g)'/><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='%23393939'/><stop offset='1' stop-color='%23232323' stop-opacity='0'/></linearGradient></defs></svg>`;

const defaultCards: MovieCardData[] = [{ id: 'd-1', title: 'Default', thumbnail: thumb(200, 112) }];

const moreLikeThisCards: MovieCardData[] = [
  {
    id: 'mlt-1',
    title: 'More Like This 1',
    thumbnail: thumb(220, 124),
    isNew: true,
    duration: '2h 18m',
  },
  {
    id: 'mlt-2',
    title: 'More Like This 2',
    thumbnail: thumb(220, 124),
    isNew: true,
    duration: '2h 18m',
  },
];

const episodePreviewCards: MovieCardData[] = [
  {
    id: 'ep-1',
    title: 'Ep 1',
    thumbnail: thumb(120, 67),
  },
  {
    id: 'ep-2',
    title: 'Ep 2',
    thumbnail: thumb(120, 67),
  },
];

const trailerPreviewCards: MovieCardData[] = [
  {
    id: 'tp-1',
    title: 'Trailer',
    thumbnail: thumb(200, 112),
    seasonInfo: 'Season 1 Trailer 1: House of Ninjas',
  },
];

const playerPreviewCards: MovieCardData[] = [
  {
    id: 'pp-1',
    title: 'Player',
    thumbnail: thumb(200, 112),
    duration: '51:29',
  },
];

const top10Cards: MovieCardData[] = [
  {
    id: 't10-1',
    title: 'Top 10',
    thumbnail: thumb(150, 200),
    rank: 1,
    isNew: true,
  },
];

const continueWatchingCards: MovieCardData[] = [
  {
    id: 'cw-1',
    title: 'Continue Watching',
    thumbnail: thumb(200, 112),
    progress: 85,
  },
];

const MovieCardsShowcase: React.FC = () => {
  const handleCardClick = (id: string) => {
    console.log('Card click:', id);
  };

  const handlePlayClick = (id: string) => {
    console.log('Play click:', id);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <MovieCards cards={defaultCards} variant="default" onCardClick={handleCardClick} />

        <MovieCards
          cards={moreLikeThisCards}
          variant="moreLikeThis"
          onCardClick={handleCardClick}
          onPlayClick={handlePlayClick}
        />

        <MovieCards
          cards={episodePreviewCards}
          variant="episodePreview"
          onCardClick={handleCardClick}
          onPlayClick={handlePlayClick}
        />

        <MovieCards
          cards={trailerPreviewCards}
          variant="trailerPreview"
          onCardClick={handleCardClick}
        />

        <MovieCards
          cards={playerPreviewCards}
          variant="playerPreview"
          onCardClick={handleCardClick}
        />

        <MovieCards cards={top10Cards} variant="top10" onCardClick={handleCardClick} />

        <MovieCards
          cards={continueWatchingCards}
          variant="continueWatching"
          onCardClick={handleCardClick}
        />
      </div>

      <ul className={styles.legend}>
        <li>Default</li>
        <li>More Like This (Default / Hover)</li>
        <li>Episode Preview (Default / Hover)</li>
        <li>Trailer Preview</li>
        <li>Player Preview</li>
        <li>TOP10</li>
        <li>Continue Watching</li>
      </ul>
    </div>
  );
};

export default MovieCardsShowcase;
