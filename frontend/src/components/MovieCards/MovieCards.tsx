import React from 'react';
import type { MovieCardsProps, MovieCardData } from './MovieCards.types.ts';
import styles from './MovieCards.module.css';
import IconButton from '../IconButton/IconButton';
import { SHOWS } from '../../assets/shows/index.tsx';

const MovieCards: React.FC<MovieCardsProps> = ({
  cards,
  variant = 'default',
  onCardClick,
  onPlayClick,
  display = 'grid',
}) => {
  // Keyboard activation helper for non-native interactive elements (fallback).
  // Kept for potential future non-native use, but all interactive elements below are native buttons.
  const activateOnKey = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // prevent page scroll on space
      action();
    }
  };

  // Normalize duration (accepts milliseconds as number or preformatted string)
  const formatDuration = (d: unknown): string => {
    if (d == null || d === '') return '';
    if (typeof d === 'number' && Number.isFinite(d)) {
      const mins = Math.round(d / 60000); // Convert milliseconds to minutes
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return h > 0 ? `${h}h ${m}m` : `${m}m`;
    }
    // Handle string type explicitly
    if (typeof d === 'string') return d;
    // For unexpected types, return empty string or log warning
    console.warn('Unexpected duration type:', typeof d, d);
    return '';
  };
  // Normalize to Time like 51:29 or 1:02:03
  const formatTime = (d: unknown): string => {
    if (d == null || d === '') return '';
    if (typeof d === 'number' && Number.isFinite(d)) {
      const total = Math.max(0, Math.round(d / 1000)); // convert milliseconds to seconds
      const h = Math.floor(total / 3600);
      const m = Math.floor((total % 3600) / 60);
      const s = total % 60;
      if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      return `${m}:${s.toString().padStart(2, '0')}`;
    }
    // Handle string type explicitly
    if (typeof d === 'string') return d;
    // For unexpected types, return empty string or log warning
    console.warn('Unexpected Time type:', typeof d, d);
    return '';
  };

  const renderCard = (card: MovieCardData) => {
    const thumbnail = card.thumbnail.startsWith('http') ? card.thumbnail : SHOWS[card.thumbnail];
    switch (variant) {
      case 'default':
        return (
          <button
            key={card.id}
            type="button"
            className={styles.cardDefault}
            aria-label={`Open ${card.title}`}
            onClick={() => onCardClick?.(card.id)}
          >
            <img src={thumbnail} alt={card.title} className={styles.thumbnail} />
          </button>
        );

      case 'moreLikeThis':
        return (
          <div key={card.id} className={styles.cardMoreLikeThisWrapper}>
            <button
              type="button"
              className={styles.cardMoreLikeThis}
              aria-label={`Open ${card.title}`}
              onClick={() => onCardClick?.(card.id)}
              onKeyDown={(e) => activateOnKey(e, () => onCardClick?.(card.id))}
            >
              {/* Brand badge (uses smallLetter.svg via CSS) */}
              <span className={styles.badgeBrand} aria-hidden="true" />
              {/* Duration (top-right) */}
              {(() => {
                const durationText = formatDuration(card.duration);
                return durationText ? (
                  <span className={styles.badgeDuration}>{durationText}</span>
                ) : (
                  <span className={styles.badgeDuration}>2h 18m</span>
                );
              })()}
              <img src={card.thumbnail} alt={card.title} className={styles.thumbnail} />
            </button>

            {/* Hover play overlay */}
            <div className={styles.playOverlay}>
              <IconButton
                icon="play"
                variant="outlined"
                aria-label={`Play ${card.title}`}
                onClick={() => {
                  onPlayClick?.(card.id);
                }}
              />
            </div>
          </div>
        );

      case 'episodePreview':
        return (
          <div key={card.id} className={styles.cardEpisodePreviewWrapper}>
            <button
              key={card.id}
              type="button"
              className={styles.cardEpisodePreview}
              aria-label={`Open ${card.title}`}
              onClick={() => onCardClick?.(card.id)}
            >
              <img src={card.thumbnail} alt={card.title} className={styles.thumbnail} />
            </button>
            {/* Hover play overlay */}
            <div className={styles.playOverlay}>
              <IconButton
                icon="play"
                variant="outlined"
                aria-label={`Play ${card.title}`}
                onClick={() => {
                  onPlayClick?.(card.id);
                }}
              />
            </div>
          </div>
        );

      case 'trailerPreview':
        // Thumbnail on top, title below (matches provided mock)
        return (
          <div key={card.id} className={styles.cardTrailerPreviewWrapper}>
            <button
              type="button"
              className={styles.cardTrailerPreview}
              aria-label={`Open ${card.title}`}
              onClick={() => onCardClick?.(card.id)}
            >
              <img src={card.thumbnail} alt={card.title} className={styles.trailerThumbnail} />
            </button>
            <div className={styles.trailerMeta}>
              <div className={styles.trailerTitle} title={card.title}>
                {card.title}
              </div>
            </div>
          </div>
        );

      case 'playerPreview':
        return (
          <div key={card.id} className={styles.cardPlayerPreviewWrapper}>
            <button
              type="button"
              className={styles.cardPlayerPreview}
              aria-label={`Open ${card.title}`}
              onClick={() => onCardClick?.(card.id)}
              onKeyDown={(e) => activateOnKey(e, () => onCardClick?.(card.id))}
            >
              <img src={card.thumbnail} alt={card.title} className={styles.thumbnail} />
              {/* Bottom-centered time bar */}
              {(() => {
                const tc = formatTime(card.duration);
                return tc ? (
                  <div className={styles.playerTimeBar}>
                    <span className={styles.playerTimeText}>{tc}</span>
                  </div>
                ) : null;
              })()}
            </button>
          </div>
        );
      case 'top10': {
        // Get rank from card, default to 1 if not provided
        const rank = card.rank ?? 1;
        const rankNumber = Number(rank);
        const validRank = Number.isFinite(rankNumber) ? Math.max(Math.trunc(rankNumber), 1) : 1;

        return (
          <div key={card.id} className={styles.cardTop10Row}>
            {/* Left: big rank pane */}
            <div className={styles.rankPane} aria-hidden="true">
              <span className={styles.rankText} aria-hidden="true">
                {validRank}
              </span>
            </div>
            {/* Right: tile */}
            <button
              type="button"
              className={styles.cardTop10}
              aria-label={`Open ${card.title}`}
              onClick={() => onCardClick?.(card.id)}
              onKeyDown={(e) => activateOnKey(e, () => onCardClick?.(card.id))}
            >
              <span className={styles.badgeBrand} aria-hidden="true" />
              <img src={card.thumbnail} alt={card.title} className={styles.thumbnail} />
              <span className={styles.badgeRecentlyAdded}>Recently Added</span>
            </button>
          </div>
        );
      }

      case 'continueWatching':
        return (
          <button
            key={card.id}
            type="button"
            className={styles.cardContinueWatching}
            aria-label={`Open ${card.title}`}
            onClick={() => onCardClick?.(card.id)}
          >
            <img src={card.thumbnail} alt={card.title} className={styles.thumbnail} />
            {card.progress && (
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${card.progress}%` }} />
              </div>
            )}
          </button>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.movieCards}>
      {/* <h2 className={styles.title}>Movie Cards</h2> */}
      <div
        className={display === 'carousel' ? styles.cardsContainerCarousel : styles.cardsContainer}
      >
        {cards.map((card) => renderCard(card))}
      </div>
    </div>
  );
};

export default MovieCards;
