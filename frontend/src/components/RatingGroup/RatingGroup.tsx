import type { RatingGroupProps } from './RatingGroup.types';
import styles from './RatingGroup.module.css';
import { cva } from 'class-variance-authority';
import React, { useState } from 'react';

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemOnClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styledRatingGroup({ size, className })}>
      {React.Children.map(children, (iconButton, index) => {
        return React.cloneElement(iconButton, {
          onClick: () => handleItemOnClick(index),
          selected: selectedIndex === index,
        });
      })}
    </div>
  );
};

export default RatingGroup;
