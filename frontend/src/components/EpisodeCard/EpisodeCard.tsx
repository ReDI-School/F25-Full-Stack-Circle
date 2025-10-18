import type { EpisodeCardProps } from './EpisodeCard.types';
import styles from './EpisodeCard.module.css';

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onClick, isCurrent, className = '' }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick?.(episode);
    }
  };

  return (
    <div
      className={`${styles.episodeCard} ${isCurrent ? styles.currentCard : ''} ${className}`}
      onClick={() => onClick?.(episode)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={styles.cardContent}>
        <span className={styles.episodeNumber}>{episode.number}</span>
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className={styles.thumbnail}
        />
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <h4>{episode.title}</h4>
            {episode.duration && <span className={styles.duration}>{episode.duration}</span>}
          </div>
          {episode.description && <p className={styles.description}>{episode.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
