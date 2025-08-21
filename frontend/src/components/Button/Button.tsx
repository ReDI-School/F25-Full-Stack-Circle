import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import { cva } from 'class-variance-authority';

// the first argument is the base styles of your button,
// in this case 'styles.button' carries the base styles of the button
const styledButton = cva(styles.button, {
  variants: {
    stretch: {
      true: styles.stretch, // if stretch is true, add the stretch class to the button
    },
  },
});

const Button = ({ children, onClick, stretch = false }: ButtonProps) => {
  return (
    <button className={styledButton({ stretch: stretch })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
