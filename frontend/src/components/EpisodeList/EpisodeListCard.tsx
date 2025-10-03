import type { EpisodeListCardProps } from './EpisodeList.types';
import styles from './EpisodeList.module.css';

const EpisodeListCard: React.FC<EpisodeListCardProps> = ({ episode, onClick }) => {
  return (
    <div
      className={styles.episodeListCard}
      onClick={() => onClick?.(episode)}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.(episode);
        }
      }}
    >
      <div>
        <span>{episode.number}</span>
        <img src={episode.thumbnail} alt={episode.title} className={styles.thumbnail} />
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <h3 className={styles.title}>{episode.title}</h3>
            <span>{episode.duration}</span>
          </div>
          <div>
            <p>{episode.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeListCard;
