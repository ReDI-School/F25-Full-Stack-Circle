export const INPUT_SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
} as const;

export const INPUT_TYPES = {
  EMAIL: 'email',
  EMAIL_OR_PHONE: 'emailOrPhone',
  PASSWORD: 'password',
} as const;

export const INPUT_STATES = {
  DEFAULT: 'default',
  ERROR: 'error',
  FOCUSED: 'focused',
} as const;

export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
export type InputState = (typeof INPUT_STATES)[keyof typeof INPUT_STATES];

export interface InputFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> {
  /**
   * The size of the input field.
   * @default INPUT_SIZES.MEDIUM
   */
  size?: InputSize;

  /**
   * The type of the input field.
   * @default INPUT_TYPES.EMAIL
   */
  type?: InputType;

  /**
   * The state of the input field.
   * @default INPUT_STATES.DEFAULT
   */
  state?: InputState;

  /**
   * The value of the input field.
   */
  value?: string;

  /**
   * The placeholder of the input field.
   */
  placeholder?: string;

  /**
   * The error message of the input field.
   */
  errorMessage?: string;

  /**
   * The function to call when the value of the input field changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * The function to call when the input field is focused.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * The function to call when the input field is blurred.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Whether the input field is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the input field is required.
   * @default false
   */
  required?: boolean;
}
