export interface VolumeSliderProps {
  /** volume in Percent (0-100) */
  value: number;
  /** Optional: Handler for onChange (e.g. for Drag) */
  onChange?: (value: number) => void;
  /** Optional: Additional CSS class */
  className?: string;
  /** Optional: Color for the Slider */
  color?: string;
}
