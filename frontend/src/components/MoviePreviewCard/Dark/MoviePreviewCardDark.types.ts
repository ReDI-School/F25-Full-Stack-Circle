import type { MaturityRatingProps } from '../../MaturityRating';
import type { VideoQualityLabelProps } from '../../VideoQualityLabel';

interface CardDarkProps {
  /**
   * The description of the component
   * !!!Don't forget to use a comma after every word!!!
   */
  children?: React.ReactNode;

  /**
   * Image link
   */
  imageLink?: string;

  /**
   * Is it new?
   */
  newSeries?: boolean;

  /**
   * The amount of seasons
   */
  seasons: number;

  /**
   * Video quality(HD,4K, etc.)
   */
  videoQuality: VideoQualityLabelProps;

  /**
   * Maturity rating(TV-MA,TV-G, etc.)
   */
  maturityRating: MaturityRatingProps;
}

export type { CardDarkProps };
