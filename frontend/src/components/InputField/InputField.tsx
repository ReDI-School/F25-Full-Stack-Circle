import { cva } from 'class-variance-authority';
import React, { useEffect, useMemo, useState } from 'react';

import { INPUT_SIZES, INPUT_STATES, INPUT_TYPES, type InputFieldProps } from './InputField.types';

import styles from './InputField.module.css';

const styledContainer = cva(styles.container);
const styledInputWrapper = cva(styles.inputWrapper, {
  variants: {
    hasError: { true: styles.error },
    isFocused: { true: styles.focused },
  },
});
const styledInputField = cva(styles.input, {
  variants: {
    size: { medium: styles.medium, large: styles.large },
    filled: { true: styles.filled },
  },
});

const placeholderForType = (type?: InputFieldProps['type']) => {
  switch (type) {
    case INPUT_TYPES.EMAIL:
      return 'Email address';
    case INPUT_TYPES.EMAIL_OR_PHONE:
      return 'Email or phone number';
    case INPUT_TYPES.PASSWORD:
      return 'Password';
    default:
      return '';
  }
};

const getDefaultErrorMessage = (hasError: boolean, type?: InputFieldProps['type']) => {
  if (!hasError) return '';

  if (type === INPUT_TYPES.PASSWORD) {
    return 'Your password must contain between 4 and 60 characters';
  }

  return 'Please enter a valid email or phone number';
};

const InputField: React.FC<InputFieldProps> = ({
  size = INPUT_SIZES.MEDIUM,
  type = INPUT_TYPES.EMAIL,
  state = INPUT_STATES.DEFAULT,
  value,
  placeholder,
  errorMessage,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<string>(value ?? '');

  const { ...inputProps } = props;
  const isFocused = state === INPUT_STATES.FOCUSED;
  const hasError = state === INPUT_STATES.ERROR;

  const resolvedLabel = placeholder ?? placeholderForType(type);
  const resolvedErrorMessage = errorMessage ?? getDefaultErrorMessage(hasError, type);

  const errorId = useMemo(() => `input-error-${Math.random().toString(36).slice(2, 9)}`, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;

    if (value === undefined) setInternalValue(next);

    onChange?.(e);
  };

  useEffect(() => {
    if (value !== undefined && value !== internalValue) setInternalValue(value);
  }, [value, internalValue]);

  return (
    <div className={styledContainer()}>
      <div
        className={styledInputWrapper({
          isFocused: isFocused,
          hasError: hasError,
        })}
      >
        <input
          {...inputProps}
          className={styledInputField({ size, filled: !!internalValue })}
          type={type === INPUT_TYPES.PASSWORD ? 'password' : 'text'}
          value={internalValue}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          aria-label={resolvedLabel}
          {...(hasError && { 'aria-invalid': 'true', 'aria-describedby': errorId })}
        />
        <label className={styles.label}>{resolvedLabel}</label>
        <span className={styles.divider} aria-hidden="true" />
      </div>
      {hasError && resolvedErrorMessage && (
        <div className={styles.errorText} id={errorId} role="alert" aria-live="polite">
          <span className={styles.errorIcon} aria-hidden="true">
            X
          </span>
          <span>{resolvedErrorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
