import type { RatingGroupProps } from './RatingGroup.types';
import styles from './RatingGroup.module.css';
import { cva } from 'class-variance-authority';
import { cloneElement, useState, type ReactElement } from 'react';
import type { IconButtonProps } from '../IconButton';

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
  // const [selected, setSelected] = useState(false);

  // const handleItemOnClick = () => {
  //   setSelected((prev) => !prev);
  // };

  // return (
  //   <div className={styledRatingGroup({ size, className })}>
  //     {children.map((iconButton) => {
  //       return iconButton;
  //     })}
  //   </div>
  // );

  const [selected, setSelected] = useState<number | null>(null);

  const handleItemOnClick = (index: number) => {
    setSelected((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styledRatingGroup({ size, className })}>
      {children.map((child, index) =>
        cloneElement(child as ReactElement<IconButtonProps>, {
          onClick: () => handleItemOnClick(index),
          selected: selected === index,
        })
      )}
    </div>
  );

};

export default RatingGroup;
