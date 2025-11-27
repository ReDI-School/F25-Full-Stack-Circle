import type { CheckboxProps } from '.';
import styles from './Checkbox.module.css';

const Checkbox = ({
  label = 'Remember me',
  checked,
  onChange,
  'aria-label': ariaLabel,
  ...props
}: CheckboxProps) => {
  const { ...inputProps } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        {...inputProps}
        type="checkbox"
        checked={checked}
        aria-label={ariaLabel || label}
        onChange={handleChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkMark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
