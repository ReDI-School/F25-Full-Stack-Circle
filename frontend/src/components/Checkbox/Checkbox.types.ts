interface CheckboxProps {
  label?: string;

  checked: boolean;

  onChange?: (checked: boolean) => void;

  'aria-label'?: string;
}
export type { CheckboxProps };
