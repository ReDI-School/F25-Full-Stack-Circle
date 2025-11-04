import { cva } from 'class-variance-authority';
import { cloneElement, useState } from 'react';

import type { RatingGroupProps } from './index';
import styles from './RatingGroup.module.css';

const styledRatingGroup = cva(styles.ratingGroup, {
  variants: {
    size: {
      small: styles['ratingGroup--small'],
      medium: styles['ratingGroup--medium'],
      large: styles['ratingGroup--large'],
    },
  },
});

const RatingGroup = ({ children, size = 'medium', className }: RatingGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    children.findIndex((c) => c.props.selected)
  );

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styledRatingGroup({ size, className })}>
      {children.map((iconButton, index) => {
        return cloneElement(iconButton, {
          onClick: () => handleItemClick(index),
          selected: selectedIndex === index,
        });
      })}
    </div>
  );
};

export default RatingGroup;
