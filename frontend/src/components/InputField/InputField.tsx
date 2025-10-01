import React, { useMemo, useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import styles from "./InputField.module.css";
import type { InputFieldProps } from "./InputField.types";

const styledContainer = cva(styles.container);
const styledInputWrapper = cva(styles.inputWrapper, {
  variants: {
    error: { true: styles.error },
    focused: { true: styles.focused },
  },
});
const styledInputField = cva(styles.input, {
  variants: {
    size: { Medium: styles.medium, Large: styles.large },
    filled: { true: styles.filled },
  },
});

const placeholderForType = (type?: InputFieldProps["type"]) => {
  if (type === "Email") return "Email address";
  if (type === "EmailorPhone") return "Email or phone number";
  if (type === "Password") return "Password";
  return "";
};

const InputField: React.FC<InputFieldProps> = ({
  size = "Medium",
  type = "Email",
  state = "Default",
  value,
  placeholder,
  errorMessage,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
}) => {
  const isFocused = state === "Focused";
  const isError = state === "Error";

  const [internalValue, setInternalValue] = useState<string>(value ?? "");
  useEffect(() => {
    if (value !== undefined && value !== internalValue) setInternalValue(value);
  }, [value]);

  const resolvedLabel = placeholder ?? placeholderForType(type);

  const resolvedErrorMessage =
    errorMessage ??
    (isError
      ? type === "Password"
        ? "Your password must contain between 4 and 60 characters"
        : "Please enter a valid email or phone number"
      : "");

  const errorId = useMemo(
    () => `input-error-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    if (value === undefined) setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div className={styledContainer()}>
      <div
        className={styledInputWrapper({
          focused: isFocused,
          error: isError,
        })}
      >
        <input
          className={styledInputField({ size, filled: !!internalValue })}
          type={type === "Password" ? "password" : "text"}
          value={internalValue}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          aria-invalid={isError}
          aria-describedby={isError ? errorId : undefined}
          aria-label={resolvedLabel}
        />
        <label className={styles.label}>{resolvedLabel}</label>
        <span className={styles.divider} aria-hidden="true" />
      </div>

      {isError && resolvedErrorMessage && (
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
