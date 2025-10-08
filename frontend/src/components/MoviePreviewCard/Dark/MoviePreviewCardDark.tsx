import type { CardDarkProps } from './MoviePreviewCardDark.types';
import styles from './MoviePreviewCardDark.module.css';
import { IconButton } from '../../IconButton';

import Image1 from '../../../assets/images/movie-preview-card-1.webp';
import { VideoQualityLabel } from '../../VideoQualityLabel';
import React, { Children } from 'react';
import { MaturityRating } from '../../MaturityRating';

const MoviePreviewCardDark = ({
  children,
  imageLink = Image1,
  seasons,
  newSeries,
  videoQuality,
  maturityRating,
}: CardDarkProps) => {
  const childrenArray = Children.toArray(children).flatMap((child) => {
    if (typeof child === 'string') {
      return child
        .split(/,|'|\n/)
        .map((line) => line.trim())
        .filter(Boolean);
    }
    return child;
  });

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={imageLink} alt="alt" />
        <IconButton icon="mute" variant="outlined" />
      </div>
      <div className={styles.mainWrap}>
        <div className={styles.buttonWrap}>
          <div className={styles.buttonWrapLeft}>
            <IconButton icon="play" variant="outlined" />
            <IconButton icon="thumbs-up" variant="outlined" />
            <IconButton icon="plus" variant="outlined" />
          </div>
          <div className={styles.buttonWrapRight}>
            <IconButton icon="expand" variant="outlined" />
          </div>
        </div>
        <div className={styles.bottomWrap}>
          <div className={styles.ratingWrap}>
            {newSeries && <p>New</p>}
            <MaturityRating rating={maturityRating.rating} />
            <p>{seasons > 1 ? `${seasons} seasons` : `${seasons} season`}</p>
            <VideoQualityLabel type={videoQuality.type} />
          </div>
          <div className={styles.description}>
            {childrenArray.map((child, index) =>
              typeof child === 'string' ? (
                <p key={index}>{child}</p>
              ) : (
                React.cloneElement(child as React.ReactElement, { key: index })
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePreviewCardDark;
