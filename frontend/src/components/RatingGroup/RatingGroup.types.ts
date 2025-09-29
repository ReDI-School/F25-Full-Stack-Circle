import type React from 'react';
import type { IconButton } from '../IconButton';

interface RatingGroupProps {
  /**
   * The array of IconButton Component to display
   */
  children: React.ReactElement<typeof IconButton>[];
}

export type { RatingGroupProps };
