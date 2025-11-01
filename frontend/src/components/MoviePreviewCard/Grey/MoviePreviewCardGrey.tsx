import type { CardGreyProps } from './MoviePreviewCardGrey.types';
import styles from './MoviePreviewCardGrey.module.css';
import { IconButton } from '../../IconButton';

import Logo from '../../../assets/icons/netflix-logo.svg?react';

import Image2 from '../../../assets/images/movie-preview-card-2.webp';
import { VideoQualityLabel } from '../../VideoQualityLabel';
import { MaturityRating } from '../../MaturityRating';

const MoviePreviewCardDark = ({
  children,
  imageLink = Image2,
  videoQuality,
  maturityRating,
  year,
  duration,
}: CardGreyProps) => {
  const timeConvert = (n: number) => {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'm';
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={imageLink} alt="alt" />
        <div className={styles.imageDesc}>
          <div className={styles.svgWrap}>
            <Logo />
          </div>
          <div>{timeConvert(duration)}</div>
        </div>
      </div>
      <div className={styles.mainWrap}>
        <div className={styles.ratingWrap}>
          <div className={styles.maturityWrap}>
            <MaturityRating rating={maturityRating.rating} />
            <VideoQualityLabel type={videoQuality.type} />
            <p>{year}</p>
          </div>
          <IconButton icon="plus" variant="outlined" />
        </div>
        <div className={styles.description}>{children}</div>
      </div>
    </div>
  );
};

export default MoviePreviewCardDark;
