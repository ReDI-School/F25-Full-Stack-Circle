import type { EpisodeListProps } from './EpisodeList.types';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import styles from './EpisodeList.module.css';

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes = [],
  onEpisodeClick,
  currentEpisodeId,
  className = '',
}) => {
  if (episodes.length === 0) {
    return <p className={styles.alertMessage}>Watch out for the new season.</p>;
  }

  return (
    <div className={`${styles.episodeListContainer} ${className}`}>
      <h3>List of Episodes</h3>
      <div className={styles.episodeListWrapper}>
        <ul className={styles.episodeList}>
          {episodes.map((episode) => {
            const isCurrent = episode.id === currentEpisodeId;

            return (
              <li
                key={episode.id}
                className={`${styles.episodeItem} ${isCurrent ? styles.currentEpisode : ''}`}
              >
                <EpisodeCard episode={episode} onClick={onEpisodeClick} isCurrent={isCurrent} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EpisodeList;
