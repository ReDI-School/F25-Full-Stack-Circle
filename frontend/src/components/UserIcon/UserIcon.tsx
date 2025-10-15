import { cva } from 'class-variance-authority';

import { PopularAvatars } from '../../assets/avatars/index';

import type { UserIconProps } from './UserIcon.types';

import styles from './UserIcon.module.css';

// the first argument is the base styles of your UserIcon,
// in this case 'styles.UserIcon' carries the base styles of the UserIcon
const styledUserIcon = cva(styles.button, {
  variants: {
    size: {
      big: styles.sizeBig,
      small: styles.sizeSmall,
    },
  },
  defaultVariants: {
    size: 'big',
    userName: 'User Name',
  },
});

const UserIcon = ({
  onClick,
  disabled = false,
  size = 'big',
  avatar = '01',
  userName = 'User Name',
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}: UserIconProps) => {
  const renderIcon = (avatar: string | React.ReactNode, ariaLabel?: string) => {
    if (!avatar) return null;

    // if string, get from ICONS first
    if (typeof avatar === 'string') {
      const src = PopularAvatars[avatar];
      return <img src={src} alt={ariaLabel ?? ''} className={styles.avatar} />;
    }

    // if not, treat as React node
    return <span className={styles.avatar}>{avatar}</span>;
  };

  return (
    <button
      className={styledUserIcon({ size })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...rest}
    >
      {renderIcon(avatar, ariaLabel)}
      {size === 'big' && userName && <span className={styles.userName}>{userName}</span>}
    </button>
  );
};

export default UserIcon;
