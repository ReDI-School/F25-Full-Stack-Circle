export interface VolumeSliderProps {
  /** Lautstärke in Prozent (0-100) */
  value: number;
  /** Optional: Handler für onChange (z.B. für Drag) */
  onChange?: (value: number) => void;
  /** Optional: Zusätzliche CSS-Klasse */
  className?: string;
  /** Optional: Farbe für den Slider */
  color?: string;
  /** Icon für den Slider */
  iconType?: 'high' | 'middle' | 'mute';
}
