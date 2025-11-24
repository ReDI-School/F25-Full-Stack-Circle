export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the checkbox is checked.
   */
  checked?: boolean;

  /**
   * The function to call when the checkbox state changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * The label text for the checkbox.
   */
  label?: string;

  /**
   * The aria-label for the checkbox.
   */
  'aria-label'?: string;
}
