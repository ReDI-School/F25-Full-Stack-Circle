import type React from 'react';
import type { IconButton } from '../IconButton';

interface RatingGroupProps {
  /**
   * The array of IconButton Component to display
   */
  children: React.ReactElement<typeof IconButton>[];

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
