export type InputSize = 'Large' | 'Medium';
export type InputType = 'Email' | 'EmailorPhone' | 'Password';
export type InputState = 'Default' | 'Error' | 'Focused';

export interface InputFieldProps {
  size?: InputSize;
  type?: InputType;
  state?: InputState;
  value?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  required?: boolean;
}
