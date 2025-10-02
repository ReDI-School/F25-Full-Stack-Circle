import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

const Checkbox = ({
  label = 'Remember me',
  checked = false,
  onChange,
  'aria-label': ariaLabel,
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={checked}
          aria-label={ariaLabel || label}
          onChange={handleChange}
          className={styles.checkboxInput}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
