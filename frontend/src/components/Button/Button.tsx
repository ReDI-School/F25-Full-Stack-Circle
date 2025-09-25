import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import { cva } from 'class-variance-authority';
import { ICONS } from '../../assets/icons/index';

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
}: ButtonProps) => {
  const renderedIcon =
    typeof icon === 'string'
      ? ICONS[icon] // URL string for PNG
      : icon; // React node

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
      aria-label={
        iconOnly ? ariaLabel || (typeof children === 'string' ? children : undefined) : undefined
      }
    >
      {iconOnly ? (
        typeof renderedIcon === 'string' ? (
          <img src={renderedIcon} alt={ariaLabel} className={styles.icon} />
        ) : (
          <span className={styles.icon}>{renderedIcon}</span>
        )
      ) : (
        <>
          {renderedIcon &&
            iconPosition === 'before' &&
            (typeof renderedIcon === 'string' ? (
              <img src={renderedIcon} alt="" className={styles.icon} />
            ) : (
              <span className={styles.icon}>{renderedIcon}</span>
            ))}
          <span className={styles.label}>{children}</span>
          {renderedIcon &&
            iconPosition === 'after' &&
            (typeof renderedIcon === 'string' ? (
              <img src={renderedIcon} alt="" className={styles.icon} />
            ) : (
              <span className={styles.icon}>{renderedIcon}</span>
            ))}
        </>
      )}
    </button>
  );
};

export default Button;
