import type { EpisodeListProps } from './EpisodeList.types';
import EpisodeListCard from './EpisodeListCard';
import styles from './EpisodeList.module.css';

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes = [],
  onEpisodeClick,
  currentEpisodeId,
}) => {
  if (episodes.length === 0) {
    return <p>Watch out for the new season.</p>;
  }

  return (
    <div className={styles.episodeListContainer}>
      <h2>List of Episodes</h2>
      <div className={styles.episodeListWrapper}>
        <ul >
          {episodes.map((episode) => {
            const isCurrent = episode.id === currentEpisodeId;
            return (
              <li
                key={episode.id}
                className={`${styles.episodeItem} ${
                  isCurrent ? styles.currentEpisode : ''
                }`}
              >
                <EpisodeListCard
                  episode={episode}
                  onClick={onEpisodeClick}
                  isCurrent={isCurrent}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EpisodeList;

