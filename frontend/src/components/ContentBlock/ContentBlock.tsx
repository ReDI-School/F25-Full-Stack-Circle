import { cva } from 'class-variance-authority';

import styles from './ContentBlock.module.css';
import type { ContentBlockProps } from './ContentBlock.types';

const contentBlockVariants = cva(styles.contentBlock, {
  variants: {
    layout: {
      'left-to-right': styles.leftToRight,
      'right-to-left': styles.rightToLeft,
    },
  },
  defaultVariants: {
    layout: 'left-to-right',
  },
});

const imageContainerVariants = cva(styles.imageContainer, {
  variants: {
    aspectRatio: {
      '16:9': styles.aspectRatio16_9,
      '4:3': styles.aspectRatio4_3,
      '1:1': styles.aspectRatio1_1,
    },
  },
  defaultVariants: {
    aspectRatio: '16:9',
  },
});

/**
 * ContentBlock component displays a headline, description, and image
 * in either left-to-right or right-to-left layout.
 *
 * @example
 * ```tsx
 * <ContentBlock
 *   headline="Enjoy on your TV"
 *   description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
 *   image="/images/tv-showcase.jpg"
 *   layout="left-to-right"
 *   aspectRatio="16:9"
 * />
 * ```
 */
export const ContentBlock = ({
  headline,
  description,
  image,
  layout = 'left-to-right',
  aspectRatio = '16:9',
}: ContentBlockProps & { aspectRatio?: '16:9' | '4:3' | '1:1' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={contentBlockVariants({ layout })}>
        <div className={styles.textContent}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={imageContainerVariants({ aspectRatio })}>
          <img src={image} alt={headline} className={styles.image} loading="lazy" />
        </div>
      </div>
    </div>
  );
};
