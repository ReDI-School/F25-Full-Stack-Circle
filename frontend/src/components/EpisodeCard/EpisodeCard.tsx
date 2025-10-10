import type { EpisodeCardProps } from './EpisodeCard.types';
import styles from './EpisodeCard.module.css';

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onClick, isCurrent }) => {
  return (
    <div
      className={`${styles.episodeCard} ${isCurrent ? styles.currentCard : ''}`}
      onClick={() => onClick?.(episode)}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.(episode);
        }
      }}
      tabIndex={0}
    >
      <div className={styles.cardContent}>
        <span className={styles.episodeNumber}>{episode.number}</span>
        <img src="https://placehold.co/600x400" alt={episode.title} className={styles.thumbnail} />
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
