import type { VideoQualityLabelProps } from './VideoQualityLabel.types';
import styles from './VideoQualityLabel.module.css';
import dolbyVector from '../../assets/images/dolbyVector.svg';


const VideoQualityLabel = ({ type = 'HD' }: VideoQualityLabelProps) => {
  return type === 'DolbyVision' ? (
    <img src={dolbyVector} alt="Dolby Vision" aria-label="Dolby Vision" />
  ) : (
    <div className={styles.container}>
      <p>{type}</p>
    </div>
  );
};

export default VideoQualityLabel;
