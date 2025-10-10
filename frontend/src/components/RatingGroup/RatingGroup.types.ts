import type React from 'react';
import type { IconButtonProps } from '../IconButton';

interface RatingGroupProps {
  /**
   * The array of IconButton Component to display
   */
  children: React.ReactElement<IconButtonProps>;

  /**
   * The array of IconButton Component to display
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Additional CSS class name
   */
  className?: string;
}

export type { RatingGroupProps };
