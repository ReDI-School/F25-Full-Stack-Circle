import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

const Checkbox = ({
  label = 'Remember me',
  checked = false,
  onChange,
  'aria-label': ariaLabel,
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        aria-label={ariaLabel || label}
        onChange={handleChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkmark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
