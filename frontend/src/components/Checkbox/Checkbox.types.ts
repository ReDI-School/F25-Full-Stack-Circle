interface CheckboxProps {
  checked: boolean;

  onChange: (checked: boolean) => void;

  label?: string;

  'aria-label'?: string;
}
export type { CheckboxProps };
