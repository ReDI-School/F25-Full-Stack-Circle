export interface SelectProps<Value extends OptionValue> {
  options: OptionType<Value>[];
  selected?: Nullable<OptionType<Value>>;
  onChange?: (value: OptionType<Value>) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
}

export type OptionValue = string | number;

export interface OptionType<Value extends OptionValue> {
  value: Value;
  label: string;
  isDisabled?: boolean;
}
