
import type { VideoQualityLabelProps } from './VideoQualityLabel.types';
import styles from './VideoQualityLabel.module.css';
import dolbyVector from '../../assets/images/dolbyVector.svg';


const VideoQualityLabel = ({ type, className }: VideoQualityLabelProps) => {
  if (type === 'DolbyVision') {
    return (
      <div className={`${styles.dolbyContainer} ${className ?? ''}`}>
        <img src={dolbyVector} alt="Dolby Vision" aria-label='Dolby Vision'/>
      </div>
    );
  }
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <div className={styles.borderOverlay} />
      <div className={styles.textContent}>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default VideoQualityLabel;