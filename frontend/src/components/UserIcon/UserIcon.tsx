import { cva } from 'class-variance-authority';

import { PopularAvatars } from '../../assets/avatars/index';

import type { UserIconProps } from './UserIcon.types';

import styles from './UserIcon.module.css';

// the first argument is the base styles of your UserIcon,
// in this case 'styles.UserIcon' carries the base styles of the UserIcon
const styledUserIcon = cva(styles.UserIcon, {
  variants: {
    size: {
      big: styles.sizeBig,
      small: styles.sizeLarge,
    },
    fullWidth: {
      true: styles.fullWidth,
    },
    iconOnly: {
      true: styles.iconOnly,
    },
  },
  defaultVariants: {
    size: 'big',
    iconOnly: false,
  },
});

const UserIcon = ({
  children,
  onClick,
  disabled = false,
  size = 'big',
  icon,
  userName,
  iconOnly = false,
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}: UserIconProps) => {
  const renderIcon = (icon: string | React.ReactNode, ariaLabel?: string) => {
    if (!icon) return null;

    // if string, get from ICONS first
    if (typeof icon === 'string') {
      const src = PopularAvatars[icon];
      return <img src={src} alt={ariaLabel ?? ''} className={styles.icon} />;
    }

    // if not, treat as React node
    return <span className={styles.icon}>{icon}</span>;
  };

  return (
    <UserIcon
      className={styledUserIcon({
        size,
        iconOnly,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...rest}
    >
      {iconOnly ? (
        renderIcon(icon, ariaLabel)
      ) : (
        <>
          <span className={styles.label}>{children}</span>
          {userName && renderIcon(icon)}
        </>
      )}
    </UserIcon>
  );
};

export default UserIcon;
