import { cva } from 'class-variance-authority';
import type { IconButtonProps, IconName } from './IconButton.types';
import styles from './IconButton.module.css';
import Play from '../../assets/icons/play.svg?react';
import Plus from '../../assets/icons/plus.svg?react';
import Expand from '../../assets/icons/expand.svg?react';
import Mute from '../../assets/icons/mute.svg?react';
import ThumbsUp from '../../assets/icons/thumbs-up.svg?react';
import ThumbsDown from '../../assets/icons/thumbs-down.svg?react';
import DoubleThumbsUp from '../../assets/icons/double-thumbs-up.svg?react';

const styledIconButton = cva(styles.iconButton, {
  variants: {
    disabled: {
      true: styles['iconButton--disabled'],
    },
    selected: {
      true: styles['iconButton--selected'],
      false: styles['iconButton--unselected'],
    },
    size: {
      small: styles['iconButton--small'],
      medium: styles['iconButton--medium'],
      large: styles['iconButton--large'],
    },
    theme: {
      primary: styles['iconButton--primary'],
      secondary: styles['iconButton--secondary'],
    },
    variant: {
      filled: styles['iconButton--filled'],
      outlined: styles['iconButton--outlined'],
    },
  },
});

const styledIcon = cva(styles.icon, {
  variants: {
    size: {
      small: styles['icon--small'],
      medium: styles['icon--medium'],
      large: styles['icon--large'],
    },
    theme: {
      primary: styles['icon--primary'],
      secondary: styles['icon--secondary'],
    },
    variant: {
      filled: styles['icon--filled'],
      outlined: styles['icon--outlined'],
    },
  },
});

const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  play: Play,
  plus: Plus,
  expand: Expand,
  mute: Mute,
  'thumbs-up': ThumbsUp,
  'thumbs-down': ThumbsDown,
  'double-thumbs-up': DoubleThumbsUp,
};

const IconButton = ({
  icon,
  ariaLabel,
  className,
  disabled = false,
  onClick,
  selected = undefined,
  size = 'medium',
  theme = 'primary',
  variant = 'filled',
}: IconButtonProps) => {
  const Icon = iconMap[icon];

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={styledIconButton({ selected, size, theme, variant, className })}
    >
      <Icon className={styledIcon({ theme, variant, size, className })} />
    </button>
  );
};

export default IconButton;
