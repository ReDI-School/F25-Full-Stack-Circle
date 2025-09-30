import type { EpisodeListProps } from './EpisodeList.types';
import EpisodeListCard from './EpisodeListCard';
import styles from './EpisodeList.module.css';

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes = [], onEpisodeClick }) => {
  if (episodes.length === 0) {
    return <p>We need episode please.</p>;
  }

  return (
    <div className={styles.episodeListContainer}>
      <h2>List of Episodes</h2>
      <div className={styles.episodeListWrapper}>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <EpisodeListCard episode={episode} onClick={onEpisodeClick} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpisodeList;
