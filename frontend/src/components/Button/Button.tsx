import { cva } from 'class-variance-authority';

import { ICONS } from '../../assets/icons/index';

import type { ButtonProps } from './Button.types';

import styles from './Button.module.css';

// the first argument is the base styles of your button,
// in this case 'styles.button' carries the base styles of the button
const styledButton = cva(styles.button, {
  variants: {
    stretch: {
      true: styles.stretch, // if stretch is true, add the stretch class to the button
    },
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      white: styles.white,
      outlined: styles.outlined,
    },
    size: {
      small: styles.sizeSmall,
      medium: styles.sizeMedium,
      large: styles.sizeLarge,
    },
    fullWidth: {
      true: styles.fullWidth,
    },
    iconOnly: {
      true: styles.iconOnly,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const Button = ({
  children,
  onClick,
  stretch = false,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'after',
  iconOnly = false,
  fullWidth = false,
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}: ButtonProps) => {
  const renderIcon = (icon: string | React.ReactNode, ariaLabel?: string) => {
    if (!icon) return null;

    // if string, get from ICONS first
    if (typeof icon === 'string') {
      const src = ICONS[icon];
      return <img src={src} alt={ariaLabel ?? ''} className={styles.icon} />;
    }

    // if not, treat as React node
    return <span className={styles.icon}>{icon}</span>;
  };

  return (
    <button
      className={styledButton({
        stretch,
        variant,
        size,
        fullWidth,
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
          {iconPosition === 'before' && renderIcon(icon)}
          <span className={styles.label}>{children}</span>
          {iconPosition === 'after' && renderIcon(icon)}
        </>
      )}
    </button>
  );
};

export default Button;
