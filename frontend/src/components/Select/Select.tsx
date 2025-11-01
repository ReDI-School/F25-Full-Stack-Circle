import { cva } from 'class-variance-authority';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { OptionType, OptionValue, SelectProps } from '.';
import { KeyCodes } from '../../constants';
import { useOnClickOutside, useStateToggleHandlers } from '../../hooks';
import { Button } from '../Button';

import styles from './Select.module.css';

const styledSelect = cva(styles.select, {
  variants: {
    expanded: {
      true: styles.expanded,
    },
  },
});

const styledOption = cva(styles.selectOption, {
  variants: {
    selected: {
      true: styles.selected,
    },
  },
});

const Select = <Value extends OptionValue>({
  options,
  selected: controlledSelected = null,
  onChange,
  disabled = false,
  required = false,
  id,
  name,
  className = '',
  placeholder = '',
  'aria-label': ariaLabel = 'Select',
  'aria-describedby': ariaDescribedby,
  icon,
  iconPosition = 'before',
}: SelectProps<Value>) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOptionsShown, showOptions, hideOptions] = useStateToggleHandlers(false);
  const [selectedOption, setSelectedOption] = useState(controlledSelected);

  const handleOutsideClick = useCallback(hideOptions, [hideOptions]);

  const handleInputClick = () => {
    if (isOptionsShown) hideOptions();
    else showOptions();
  };

  const handleOptionSelect =
    (option: OptionType<Value>) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (option.isDisabled) return;

      setSelectedOption(option);
      onChange?.(option);

      hideOptions();
    };

  useOnClickOutside(selectRef, handleOutsideClick);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KeyCodes.Escape) hideOptions();
    };

    if (isOptionsShown) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOptionsShown, hideOptions]);

  return (
    <div ref={selectRef} className={styledSelect({ expanded: isOptionsShown, className })}>
      {icon && iconPosition === 'before' && <span className={styles.selectIcon}>{icon}</span>}
      <Button
        className={styles.selectArrow}
        role="combobox"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-haspopup="listbox"
        aria-expanded={isOptionsShown}
        aria-controls={`${id}-listbox`}
        iconOnly
        icon="arrowDown"
        disabled={disabled}
        onClick={handleInputClick}
      />
      <input
        id={id}
        name={name}
        value={selectedOption?.label ?? ''}
        onClick={handleInputClick}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={styles.selectInput}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        tabIndex={-1}
        readOnly
      />
      {icon && iconPosition === 'after' && <span className={styles.selectIcon}>{icon}</span>}
      {isOptionsShown && (
        <div id={`${id}-listbox`} role="listbox" className={styles.selectDropdown}>
          {options.map(({ label, value, isDisabled = false }) => {
            const isSelected = selectedOption?.value === value;

            return (
              <Button
                key={value}
                role="option"
                aria-selected={isSelected}
                disabled={isDisabled}
                onClick={handleOptionSelect({ value, label })}
                className={styledOption({ selected: isSelected })}
              >
                {label}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
