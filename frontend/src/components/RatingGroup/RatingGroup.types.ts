import type { IconButtonProps } from '../IconButton';
import type { ReactElement } from 'react';

interface RatingGroupProps {
  /**
   * The array of IconButton Component to display
   */
  children: ReactElement<IconButtonProps>[];

  /**
   * The size of IconButton Components to display
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Additional CSS class name
   */
  className?: string;
}

export type { RatingGroupProps };
