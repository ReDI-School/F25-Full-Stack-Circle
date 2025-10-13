import type { MaturityRatingProps } from '../../MaturityRating';
import type { VideoQualityLabelProps } from '../../VideoQualityLabel';

interface CardGreyProps {
  /**
   * The description of the component
   */
  children?: React.ReactNode;

  /**
   * Year
   */
  year: number;

  /**
   * Year
   */
  duration: number;

  /**
   * Image link
   */
  imageLink?: string;

  /**
   * Video quality(HD,4K, etc.)
   */
  videoQuality: VideoQualityLabelProps;

  /**
   * Maturity rating(TV-MA,TV-G, etc.)
   */
  maturityRating: MaturityRatingProps;
}

export type { CardGreyProps };
